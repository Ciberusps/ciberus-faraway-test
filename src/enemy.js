var Enemy = pc.createScript("enemy");

Enemy.attributes.add("health", {
  type: "number",
  default: 3,
});

Enemy.prototype.initialize = function () {
  this.entity.on("damage", (damage) => {
    this.health -= damage;

    if (this.health <= 0) this.entity.destroy();
  });
};
