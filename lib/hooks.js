'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require('./model.js');

var _model2 = _interopRequireDefault(_model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _model2.default;

/**
 * List of hooks available
 */

_model2.default.afterInitialize = null;
_model2.default.beforeValidate = null;
_model2.default.afterValidate = null;
_model2.default.beforeSave = null;
_model2.default.afterSave = null;
_model2.default.beforeCreate = null;
_model2.default.afterCreate = null;
_model2.default.beforeUpdate = null;
_model2.default.afterUpdate = null;
_model2.default.beforeDestroy = null;
_model2.default.afterDestroy = null;

_model2.default.prototype.trigger = function trigger(actionName, work, data, quit) {
    var capitalizedName = capitalize(actionName);
    var beforeHook = this.constructor['before' + capitalizedName];
    var afterHook = this.constructor['after' + capitalizedName];
    if (actionName === 'validate') {
        beforeHook = beforeHook || this.constructor.beforeValidation;
        afterHook = afterHook || this.constructor.afterValidation;
    }
    var inst = this;

    // we only call "before" hook when we have actual action (work) to perform
    if (work) {
        if (beforeHook) {
            // before hook should be called on instance with one param: callback
            beforeHook.call(inst, function (err) {
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
module.exports = exports.default;
