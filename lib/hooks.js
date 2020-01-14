import { AbstractClass as Hookable } from "./model.js";
var HookableBinding = Hookable;

/**
 * Module exports
 */
exports.Hookable = HookableBinding;

/**
 * List of hooks available
 */
HookableBinding.afterInitialize = null;
HookableBinding.beforeValidate = null;
HookableBinding.afterValidate = null;
HookableBinding.beforeSave = null;
HookableBinding.afterSave = null;
HookableBinding.beforeCreate = null;
HookableBinding.afterCreate = null;
HookableBinding.beforeUpdate = null;
HookableBinding.afterUpdate = null;
HookableBinding.beforeDestroy = null;
HookableBinding.afterDestroy = null;

HookableBinding.prototype.trigger = function trigger(actionName, work, data, quit) {
    const capitalizedName = capitalize(actionName);
    let beforeHook = this.constructor['before' + capitalizedName];
    let afterHook = this.constructor['after' + capitalizedName];
    if (actionName === 'validate') {
        beforeHook = beforeHook || this.constructor.beforeValidation;
        afterHook = afterHook || this.constructor.afterValidation;
    }
    const inst = this;

    // we only call "before" hook when we have actual action (work) to perform
    if (work) {
        if (beforeHook) {
            // before hook should be called on instance with one param: callback
            beforeHook.call(inst, err => {
                if (err) {
                    if (quit) {
                        quit.call(inst, err);
                    }
                    return;
                }
                // actual action also have one param: callback
                work.call(inst, next);
            }, data);
        } else {
            work.call(inst, next);
        }
    } else {
        next();
    }

    function next(done) {
        if (afterHook) {
            afterHook.call(inst, done);
        } else if (done) {
            done.call(this);
        }
    }
};

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
