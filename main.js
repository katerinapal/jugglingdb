"use strict";

var _when = require("when");

var _when2 = _interopRequireDefault(_when);

var _index = require("./index");

var index = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isNodeSix = process.versions.node >= '6';

if (!isNodeSix) {
    global.Promise = _when2.default.Promise;
}

module.exports = isNodeSix ? index : require('./build/index');
