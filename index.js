import * as lischema_moduleDefault from "./lib/schema";
import { AbstractClass } from "./lib/model.js";
import { legacycompoundschemaloaderjs as legacycompoundschemaloader } from "./legacy-compound-schema-loader";
import { legacycompoundinitjs as legacycompoundinit } from "./legacy-compound-init";
import { BaseSQL as sql } from "./lib/sql";
import * as common_test from "./test/common_test";
'use strict';

const { Schema } = lischema_moduleDefault;

module.exports = {

    Schema,

    AbstractClass,

    // deprecated api
    loadSchema: function(filename, settings, compound) {
        return legacycompoundschemaloader(Schema, filename, settings, compound);
    },

    init: function init(compound) {
        return legacycompoundinit(compound, Schema, AbstractClass);
    },

    get BaseSQL() {
        return sql;
    },

    get version() {
        return require(
            process.versions.node >= '6'
            ? './package.json'
            : '../package.json'
        ).version;
    },

    get test() {
        return common_test;
    }

};

