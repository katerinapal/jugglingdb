"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var inherits = exports.inherits = function inherits(newClass, baseClass) {
    Object.keys(baseClass).forEach(function (classMethod) {
        newClass[classMethod] = baseClass[classMethod];
    });

    Object.keys(baseClass.prototype).forEach(function (instanceMethod) {
        newClass.prototype[instanceMethod] = baseClass.prototype[instanceMethod];
    });
};;
