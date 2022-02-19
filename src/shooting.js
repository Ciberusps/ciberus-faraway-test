var Shooting = pc.createScript("shooting");

Shooting.attributes.add("cameraEntity", { type: "entity" });
Shooting.attributes.add("particlesEntity", { type: "entity" });

Shooting.prototype.update = function (dt) {
  if (!this.app.mouse.wasPressed(pc.MOUSEBUTTON_LEFT)) return;

  const cameraComponent = this.cameraEntity.camera;

  this.particlesEntity.particlesystem.reset();
  this.particlesEntity.particlesystem.play();

  // screen center
  const x = this.app.graphicsDevice.width / 2;
  const y = this.app.graphicsDevice.height / 2;

  const from = cameraComponent.screenToWorld(x, y, cameraComponent.nearClip);
  const to = cameraComponent.screenToWorld(x, y, cameraComponent.farClip);

  const result = this.app.systems.rigidbody.raycastFirst(from, to);

  if (!result || !result.entity) return;

  if (result.entity.tags.has("damageable")) {
    result.entity.fire("damage", 1);
  }
};
