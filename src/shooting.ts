import { attrib, createScript, ScriptTypeBase } from "./utils/createScriptDecorator";

@createScript("shooting")
class Shooting extends ScriptTypeBase {
  health: number;

  @attrib({ type: "entity" })
  cameraEntity?: pc.Entity;
  @attrib({ type: "entity" })
  particlesEntity?: pc.Entity;

  update() {
    if (!this.app.mouse.wasPressed(pc.MOUSEBUTTON_LEFT)) return;
    if (!this.particlesEntity || !this.cameraEntity) return;

    const cameraComponent = this.cameraEntity.camera;

    if (!cameraComponent) return;

    this.particlesEntity.particlesystem?.reset();
    this.particlesEntity.particlesystem?.play();

    // screen center
    const x = this.app.graphicsDevice.width / 2;
    const y = this.app.graphicsDevice.height / 2;

    const from = cameraComponent.screenToWorld(x, y, cameraComponent.nearClip);
    const to = cameraComponent.screenToWorld(x, y, cameraComponent.farClip);

    // @ts-ignore
    const result = this.app.systems.rigidbody.raycastFirst(from, to);

    if (!result || !result.entity) return;

    if (result.entity.tags.has("damageable")) {
      result.entity.fire("damage", 1);
    }
  }
}
