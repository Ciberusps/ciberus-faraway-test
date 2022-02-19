var Movement = pc.createScript("movement");

Movement.attributes.add("cameraEntity", { type: "entity" });
Movement.attributes.add("speed", { type: "number", default: 8 });
Movement.attributes.add("jumpPower", { type: "number", default: 4 });

Movement.prototype.initialize = function () {
  this.direction = new pc.Vec3(0, 0, 0);
  this.jumpAvailable = true;

  this.entity.rigidbody.on("collisionstart", this.onCollisionStart, this);
};

Movement.prototype.onCollisionStart = function (result) {
  if (!result.other.tags.has("ground")) {
    return;
  }

  this.jumpAvailable = true;
};

Movement.prototype.update = function (dt) {
  // WASD
  if (this.app.keyboard.isPressed(pc.KEY_A)) this.direction.sub(this.cameraEntity.right);

  if (this.app.keyboard.isPressed(pc.KEY_D)) this.direction.add(this.cameraEntity.right);

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
};
