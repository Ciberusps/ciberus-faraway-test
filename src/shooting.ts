import { createScript, attrib } from "./utils/createScriptDecorator";
import { ScriptTypeBase } from "./types/ScriptTypeBase";
import { events } from "./utils/events";

@createScript("shooting")
class Shooting extends ScriptTypeBase {
  @attrib({ type: "entity" })
  cameraEntity?: pc.Entity;
  @attrib({ type: "entity" })
  particlesEntity?: pc.Entity;
  @attrib({
    type: "number",
    default: 50,
    min: 1,
    description: "Time between 'shots' in ms",
  })
  fireRateMs: number = 50;

  shotTimer: TInterval;

  initialize() {
    if (!this.cameraEntity || !this.particlesEntity) {
      console.warn("[Shooting] cameraEntity && particlesEntity required");
    }

    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.startFire, this);
    this.app.mouse.on(pc.EVENT_MOUSEUP, this.stopFire, this);
    this.on?.(events.destroy, this.onDestroy, this);
  }

  onDestroy() {
    this.app.mouse.off(pc.EVENT_MOUSEDOWN, this.startFire);
    this.app.mouse.off(pc.EVENT_MOUSEUP, this.stopFire);
  }

  makeShot() {
    const cameraComponent = this.cameraEntity?.camera;
    if (!cameraComponent) {
      console.warn("[Shooting] cameraComponent required");
      return;
    }

    if (this.particlesEntity) {
      this.particlesEntity.particlesystem?.reset();
      this.particlesEntity.particlesystem?.play();
    }

    // screen center
    const x = this.app.graphicsDevice.width / 2;
    const y = this.app.graphicsDevice.height / 2;

    const from = cameraComponent.screenToWorld(x, y, cameraComponent.nearClip);
    const to = cameraComponent.screenToWorld(x, y, cameraComponent.farClip);

    // @ts-ignore
    const result: pc.RaycastResult = this.app.systems.rigidbody.raycastFirst(from, to);

    if (!result || !result.entity.tags.has("damageable")) return;
    result.entity.fire("damage", 1);
  }

  startFire(event: pc.MouseEvent) {
    if (event.button !== pc.MOUSEBUTTON_LEFT) return;
    clearInterval(this.shotTimer);
    this.shotTimer = setInterval(this.makeShot.bind(this), this.fireRateMs);
  }

  stopFire(event: pc.MouseEvent) {
    if (event.button !== pc.MOUSEBUTTON_LEFT) return;
    clearInterval(this.shotTimer);
  }
}
