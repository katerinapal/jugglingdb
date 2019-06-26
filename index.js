"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _schema = require("./lib/schema");

var lischema_moduleDefault = _interopRequireWildcard(_schema);

var _model = require("./lib/model.js");

var _model2 = _interopRequireDefault(_model);

var _legacyCompoundSchemaLoader = require("./legacy-compound-schema-loader");

var _legacyCompoundSchemaLoader2 = _interopRequireDefault(_legacyCompoundSchemaLoader);

var _legacyCompoundInit = require("./legacy-compound-init");

var _legacyCompoundInit2 = _interopRequireDefault(_legacyCompoundInit);

var _sql = require("./lib/sql");

var _sql2 = _interopRequireDefault(_sql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

'use strict';

var Schema = lischema_moduleDefault.Schema;
exports.default = {

    Schema: Schema,

    AbstractClass: _model2.default,

    // deprecated api
    loadSchema: function loadSchema(filename, settings, compound) {
        return (0, _legacyCompoundSchemaLoader2.default)(Schema, filename, settings, compound);
    },

    init: function init(compound) {
        return (0, _legacyCompoundInit2.default)(compound, Schema, _model2.default);
    },

    get BaseSQL() {
        return _sql2.default;
    },

    get version() {
        return require(process.versions.node >= '6' ? './package.json' : '../package.json').version;
    },

    get test() {
        return require('./test/common_test');
    }

};
;
module.exports = exports.default;
