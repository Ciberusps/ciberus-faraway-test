// PlayCanvas life-cycle methods
// TODO: remove there is not much lifecycle methods
// they just can be remembered and typed by hand using pc.SomeType
export type OnCollisionStart = (result: pc.ContactResult) => void;
export type OnCollisionEnd = (result: pc.Entity) => void;
export type Update = (dt: number) => void;

export class TEventHandler {
  // Events (modded to be optional below to get it to run!)
  /**
   * @readonly
   * @static
   * @function
   * @name pc.ScriptType.extend
   * @param {object} methods - Object with methods, where key - is name of method, and value - is function.
   * @description Shorthand function to extend Script Type prototype with list of methods.
   * @example
   * var PlayerController = pc.createScript('playerController');
   *
   * PlayerController.extend({
   *     initialize: function () {
   *         // called once on initialize
   *     },
   *     update: function (dt) {
   *         // called each tick
   *     }
   * });
   */
  /**
   * @function
   * @name pc.ScriptType#[initialize]
   * @description Called when script is about to run for the first time.
   */
  on?(name: "test", callback: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler;
  /**
   * @function
   * @name pc.EventHandler#off
   * @description Detach an event handler from an event. If callback is not provided then all callbacks are unbound from the event,
   * if scope is not provided then all events with the callback will be unbound.
   * @param {string} [name] - Name of the event to unbind.
   * @param {pc.callbacks.HandleEvent} [callback] - Function to be unbound.
   * @param {object} [scope] - Scope that was used as the this when the event is fired.
   * @returns {pc.EventHandler} Self for chaining.
   * @example
   * var handler = function () {
   * };
   * obj.on('test', handler);
   *
   * obj.off(); // Removes all events
   * obj.off('test'); // Removes all events called 'test'
   * obj.off('test', handler); // Removes all handler functions, called 'test'
   * obj.off('test', handler, this); // Removes all hander functions, called 'test' with scope this
   */
  off?(name?: "test", callback?: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler;
  /**
   * @function
   * @name pc.EventHandler#fire
   * @description Fire an event, all additional arguments are passed on to the event listener.
   * @param {object} name - Name of event to fire.
   * @param {*} [arg1] - First argument that is passed to the event handler.
   * @param {*} [arg2] - Second argument that is passed to the event handler.
   * @param {*} [arg3] - Third argument that is passed to the event handler.
   * @param {*} [arg4] - Fourth argument that is passed to the event handler.
   * @param {*} [arg5] - Fifth argument that is passed to the event handler.
   * @param {*} [arg6] - Sixth argument that is passed to the event handler.
   * @param {*} [arg7] - Seventh argument that is passed to the event handler.
   * @param {*} [arg8] - Eighth argument that is passed to the event handler.
   * @returns {pc.EventHandler} Self for chaining.
   * @example
   * obj.fire('test', 'This is the message');
   */
  fire?(
    name: any,
    arg1?: any,
    arg2?: any,
    arg3?: any,
    arg4?: any,
    arg5?: any,
    arg6?: any,
    arg7?: any,
    arg8?: any
  ): pc.EventHandler;
  /**
   * @function
   * @name pc.EventHandler#once
   * @description Attach an event handler to an event. This handler will be removed after being fired once.
   * @param {string} name - Name of the event to bind the callback to.
   * @param {pc.callbacks.HandleEvent} callback - Function that is called when event is fired. Note the callback is limited to 8 arguments.
   * @param {object} [scope] - Object to use as 'this' when the event is fired, defaults to current this.
   * @returns {pc.EventHandler} Self for chaining.
   * @example
   * obj.once('test', function (a, b) {
   *     console.log(a + b);
   * });
   * obj.fire('test', 1, 2); // prints 3 to the console
   * obj.fire('test', 1, 2); // not going to get handled
   */
  once?(name: string, callback: pc.callbacks.HandleEvent, scope?: any): pc.EventHandler;
  /**
   * @function
   * @name pc.EventHandler#hasEvent
   * @description Test if there are any handlers bound to an event name.
   * @param {string} name - The name of the event to test.
   * @returns {boolean} True if the object has handlers bound to the specified event name.
   * @example
   * obj.on('test', function () { }); // bind an event to 'test'
   * obj.hasEvent('test'); // returns true
   * obj.hasEvent('hello'); // returns false
   */
  hasEvent?(name: string): boolean;
}
