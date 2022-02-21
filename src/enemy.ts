import { createScript, attrib } from "./utils/createScriptDecorator";
import { ScriptTypeBase } from "./types/ScriptTypeBase";

@createScript("enemy")
class Enemy extends ScriptTypeBase {
  @attrib({ type: "number", default: 3 })
  health: number;

  initialize() {
    this.entity.on("damage", (damage) => {
      this.health -= damage;

      if (this.health <= 0) this.entity.destroy();
    });
  }
}
