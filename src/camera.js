var Camera = pc.createScript("camera");

Camera.attributes.add("sensivity", {
  type: "vec2",
  default: [0.15, 0.1],
});

Camera.attributes.add("pitchLimit", {
  type: "json",
  schema: [
    {
      name: "min",
      type: "number",
      default: -90,
    },
    {
      name: "max",
      type: "number",
      default: 90,
    },
  ],
});

Camera.prototype.initialize = function () {
  this.rotationX = 0;
  this.rotationY = 0;

  // pointer lock
  this.app.mouse.on(pc.EVENT_MOUSEDOWN, () => {
    if (pc.Mouse.isPointerLocked()) return;

    this.app.mouse.enablePointerLock();
  });

  // mouse move
  this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.rotate, this);
};

Camera.prototype.rotate = function (e) {
  this.rotationY -= e.dx * this.sensivity.x;
  this.rotationX = pc.math.clamp(
    this.rotationX - e.dy * this.sensivity.y,
    this.pitchLimit.min,
    this.pitchLimit.max
  );
  this.entity.setLocalEulerAngles(this.rotationX, this.rotationY, 0);
};
