import fs from "fs";
import path from "path";
import { AbstractClass } from "./lib/model.js";

var Schema = Schema_obj = require('./lib/schema').Schema;
var AbstractClass_obj = AbstractClass;

var baseSQL = './lib/sql';

exports.__defineGetter__('BaseSQL', function () {
    return require(baseSQL);
});

var loadSchema = function(filename, settings, compound) {
    var schema = [];
    var definitions = require(filename);
    Object.keys(definitions).forEach(function(k) {
        var conf = settings[k];
        if (!conf) {
            console.log('No config found for ' + k + ' schema, using in-memory schema');
            conf = {driver: 'memory'};
        }
        schema[k] = new Schema(conf.driver, conf);
        schema[k].on('define', function(m, name, prop, sett) {
            compound.models[name] = m;
            if (conf.backyard) {
                schema[k].backyard.define(name, prop, sett);
            }
        });
        schema[k].name = k;
        schema.push(schema[k]);
        if (conf.backyard) {
            schema[k].backyard = new Schema(conf.backyard.driver, conf.backyard);
        }
        if ('function' === typeof definitions[k]) {
            define(schema[k], definitions[k]);
            if (conf.backyard) {
                define(schema[k].backyard, definitions[k]);
            }
        }
    });

    return schema;

    function define(db, def) {
        def(db, compound);
    }
};

export { loadSchema };;

var init = function (compound) {
    if (global.railway) {
        global.railway.orm = exports;
    } else {
        compound.orm = {
            Schema: Schema_obj,
            AbstractClass: AbstractClass_obj
        };
        if (compound.app.enabled('noeval schema')) {
            compound.orm.schema = exports.loadSchema(
                compound.root + '/db/schema',
                compound.app.get('database'),
                compound
            );
            if (compound.app.enabled('autoupdate')) {
                compound.on('ready', function() {
                    compound.orm.schema.forEach(function(s) {
                        s.autoupdate();
                        if (s.backyard) {
                            s.backyard.autoupdate();
                            s.backyard.log = s.log;
                        }
                    });
                });
            }
            return;
        }
    }

    // legacy stuff

    if (compound.version > '1.1.5-15') {
        compound.on('after routes', initialize);
    } else {
        initialize();
    }

    function initialize() {
        var railway = './lib/railway', init;
        try {
            init = require(railway);
        } catch (e) {
            console.log(e.stack);
        }
        if (init) {
            init(compound);
        }
    }
};

export { init };;

exports.__defineGetter__('version', function () {
    return JSON.parse(fs.readFileSync(__dirname + '/package.json')).version;
});

var commonTest = './test/common_test';
exports.__defineGetter__('test', function () {
    return require(commonTest);
});
var exported_Schema = Schema_obj = require("./lib/schema").Schema;
export { exported_Schema as Schema };
var exported_AbstractClass;
export { exported_AbstractClass as AbstractClass };
