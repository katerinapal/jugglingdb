import * as lischema_moduleDefault from "./lib/schema";
import AbstractClass from "./lib/model.js";
import legacycompoundschemaloader_moduleDefault from "./legacy-compound-schema-loader";
import legacycompoundinit_moduleDefault from "./legacy-compound-init";
import libsql_moduleDefault from "./lib/sql";
'use strict';

const { Schema } = lischema_moduleDefault;

export default {

    Schema,

    AbstractClass,

    // deprecated api
    loadSchema: function(filename, settings, compound) {
        return legacycompoundschemaloader_moduleDefault(Schema, filename, settings, compound);
    },

    init: function init(compound) {
        return legacycompoundinit_moduleDefault(compound, Schema, AbstractClass);
    },

    get BaseSQL() {
        return libsql_moduleDefault;
    },

    get version() {
        return require(
            process.versions.node >= '6'
            ? './package.json'
            : '../package.json'
        ).version;
    },

    get test() {
        return require('./test/common_test');
    }

};;

