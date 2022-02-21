import { ScriptTypeBase } from "./types/ScriptTypeBase";

import { getCollisionHeight, randomNumberInRange } from "./utils";
import { attrib, createScript } from "./utils/createScriptDecorator";
import { events } from "./utils/events";
import { ebEvents } from "./utils/events";
import { entityTags } from "./utils/tags";

// for better spawning NavMesh required
// so for now we will get positions of enemies and player on the level
// and create "spawnPoints" on start
@createScript("spawner")
class Spawner extends ScriptTypeBase {
  @attrib({ type: "vec3", default: new pc.Vec3(0, 0.25, 0) })
  spawnOffset: pc.Vec3;

  spawnPositions: pc.Vec3[];

  initialize() {
    const enemies = this.entity.findByTag(entityTags.damageable);
    const player = this.entity.findByTag(entityTags.player)[0];
    this.spawnPositions = [
      player.getPosition().clone(),
      ...enemies.map((e) => e.getPosition()),
    ];

    this.app.on(ebEvents["player:falled"], this.spawnAtRandomPoint, this);

    this.on?.(events.destroy, function () {
      this.app.off(ebEvents["player:falled"], this.spawnAtRandomPoint);
    });
  }

  spawnAtRandomPoint(entity: pc.Entity) {
    // here "sweep test" should be used - sweep a shape down(box, capsule...)
    // and check if something blocks spawn here will use lazy way
    const randomIdx = randomNumberInRange(0, this.spawnPositions.length);

    let spawnPoint = this.spawnPositions[randomIdx];
    spawnPoint = spawnPoint.add(this.spawnOffset);
    spawnPoint.y += getCollisionHeight(entity.collision);

    entity.rigidbody?.teleport(spawnPoint, pc.Vec3.ZERO);
  }
}
