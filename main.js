"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _when = require("when");

var _when2 = _interopRequireDefault(_when);

var _index = require("./index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNodeSix = process.versions.node >= '6';

if (!isNodeSix) {
    global.Promise = _when2.default.Promise;
}

exports.default = isNodeSix ? _index2.default : require('./build/index');
;
module.exports = exports.default;
