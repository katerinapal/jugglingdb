"use strict";

var _should = require("should");

var _should2 = _interopRequireDefault(_should);

var _ = require("../");

var Schema = _interopRequireWildcard(_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = _should2.default;

if (!('getSchema' in global)) {
    global.getSchema = function () {
        return new Schema.Schema('memory');
    };
}
