import { createScript, attrib } from "./utils/createScriptDecorator";
import { ebEvents } from "./utils/events";

import { ScriptTypeBase } from "./types/ScriptTypeBase";
import { falledCheckEvents } from "./falledCheck";

@createScript("enemy")
class Enemy extends ScriptTypeBase {
  @attrib({ type: "number", default: 3 })
  health: number;

  initialize() {
    this.entity.on("damage", this.tryTakeDamage, this);

    this.entity.on?.(falledCheckEvents.falled, this.onFalled, this);
  }

  tryTakeDamage(damage: number) {
    this.health -= damage;

    if (this.health <= 0) {
      this.die();
    }
  }

  onFalled() {
    console.log("Enemy falled");
    this.tryTakeDamage(this.health);
  }

  die() {
    this.app.fire(ebEvents["enemy:died"], this.entity);
    this.entity.destroy();
  }
}
