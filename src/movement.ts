import { createScript, ScriptTypeBase, attrib } from "./utils/createScriptDecorator";

@createScript("movement")
class Movement extends ScriptTypeBase {
  direction = new pc.Vec3(0, 0, 0);
  jumpAvailable = true;

  @attrib({ type: "entity" })
  cameraEntity?: pc.Entity;
  @attrib({ type: "number", default: 8 })
  speed: number;
  @attrib({ type: "number", default: 4 })
  jumpPower: number;

  initialize() {
    this.entity.rigidbody?.on("collisionstart", this.onCollisionStart, this);
  }

  onCollisionStart(result: TRigidBody.TOnCollisionStartResult) {
    if (!result.other.tags.has("ground")) {
      return;
    }

    this.jumpAvailable = true;
  }

  update(dt: number) {
    if (!this.cameraEntity || !this.entity.rigidbody)
      throw new Error("cameraEntity && rigidbody should be defined");

    // WASD
    if (this.app.keyboard.isPressed(pc.KEY_A))
      this.direction.sub(this.cameraEntity.right);

    if (this.app.keyboard.isPressed(pc.KEY_D))
      this.direction.add(this.cameraEntity.right);

    if (this.app.keyboard.isPressed(pc.KEY_W))
      this.direction.add(this.cameraEntity.forward);

    if (this.app.keyboard.isPressed(pc.KEY_S))
      this.direction.sub(this.cameraEntity.forward);

    this.direction.mulScalar(this.speed);

    // SPACE (jump)
    if (this.app.keyboard.wasPressed(pc.KEY_SPACE) && this.jumpAvailable) {
      this.direction.y = this.jumpPower;
      this.jumpAvailable = false;
    } else {
      this.direction.y = this.entity.rigidbody.linearVelocity.y;
    }

    this.entity.rigidbody.linearVelocity = this.direction;
    this.direction.set(0, this.direction.y, 0);
  }
}
