// remove then playcanvas add types for default events
export const events = {
  contact: "contact",
  collisionend: "collisionend",
  collisionstart: "collisionstart",
  destroy: "destroy",
};

// EventBus(this.app.on/fire) events
export const ebEvents = {
  "player:falled": "player:falled",
  "enemy:died": "enemy:died",
};
