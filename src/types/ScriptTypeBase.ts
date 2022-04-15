import { TAttributeParams } from "./attributes";
import { TEventHandler } from "./lifecycle";

// PCT - PlayCanvasTypes abbreviated for shortness
// Should be used to make class methods typed
// ref https://github.com/Glidias/playcanvas-typescript-babel-intellisense-template/tree/6a35dab6d229c3857673e56861b34cc1a658cb54

class MyApp extends pc.Application implements TEventHandler {}

export class ScriptTypeBase extends TEventHandler {
  // custom holder to contain attributesData used for initialization of attributes
  attributesData?: { [key: string]: TAttributeParams };

  // -- PLAYCANVAS stuff from here onwards

  // lifecycle methods
  /**
   * @function
   * @name pc.ScriptType#[initialize]
   * @description Called when script is about to run for the first time.
   */
  initialize?(): void;
  /**
   * @function
   * @name pc.ScriptType#[postInitialize]
   * @description Called after all initialize methods are executed in the same tick or enabling chain of actions.
   */
  postInitialize?(): void;
  /**
   * @function
   * @name pc.ScriptType#[update]
   * @description Called for enabled (running state) scripts on each tick.
   * @param {number} dt - The delta time in seconds since the last frame.
   */
  update?(dt: number): void;
  /**
   * @function
   * @name pc.ScriptType#[postUpdate]
   * @description Called for enabled (running state) scripts on each tick, after update.
   * @param {number} dt - The delta time in seconds since the last frame.
   */
  postUpdate?(dt: number): void;
  /**
   * @function
   * @name pc.ScriptType#[swap]
   * @description Called when a ScriptType that already exists in the registry
   * gets redefined. If the new ScriptType has a `swap` method in its prototype,
   * then it will be executed to perform hot-reload at runtime.
   */
  swap?(): void;
  /**
   * @function
   * @name pc.EventHandler#on
   * @description Attach an event handler to an event.
   * @param {string} name - Name of the event to bind the callback to.
   * @param {pc.callbacks.HandleEvent} callback - Function that is called when event is fired. Note the callback is limited to 8 arguments.
   * @param {object} [scope] - Object to use as 'this' when the event is fired, defaults to current this.
   * @returns {pc.EventHandler} Self for chaining.
   * @example
   * obj.on('test', function (a, b) {
   *     console.log(a + b);
   * });
   * obj.fire('test', 1, 2); // prints 3 to the console
   */

  // attributes
  readonly attributes: pc.ScriptAttributes;

  /**
   * The {@link pc.Application} that the instance of this type
   * belongs to.
   */
  app: MyApp;
  /**
   * The {@link pc.Entity} that the instance of this type belongs to.
   */
  entity: pc.Entity;
  /**
   * True if the instance of this type is in running state. False
   * when script is not running, because the Entity or any of its parents are disabled or the
   * Script Component is disabled or the Script Instance is disabled. When disabled no update
   * methods will be called on each tick. initialize and postInitialize methods will run once
   * when the script instance is in `enabled` state during app tick.
   */
  enabled: boolean;
}
