"use strict";

var _schema = require("./lib/schema");

var lischema_moduleDefault = _interopRequireWildcard(_schema);

var _model = require("./lib/model.js");

var _legacyCompoundSchemaLoader = require("./legacy-compound-schema-loader");

var _legacyCompoundInit = require("./legacy-compound-init");

var _sql = require("./lib/sql");

var _common_test = require("./test/common_test");

var common_test = _interopRequireWildcard(_common_test);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

'use strict';

var Schema = lischema_moduleDefault.Schema;


module.exports = {

    Schema: Schema,

    AbstractClass: _model.AbstractClass,

    // deprecated api
    loadSchema: function loadSchema(filename, settings, compound) {
        return (0, _legacyCompoundSchemaLoader.legacycompoundschemaloaderjs)(Schema, filename, settings, compound);
    },

    init: function init(compound) {
        return (0, _legacyCompoundInit.legacycompoundinitjs)(compound, Schema, _model.AbstractClass);
    },

    get BaseSQL() {
        return _sql.BaseSQL;
    },

    get version() {
        return require(process.versions.node >= '6' ? './package.json' : '../package.json').version;
    },

    get test() {
        return common_test;
    }

};
