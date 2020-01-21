'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.legacycompoundinitjs = undefined;

var _legacyCompoundSchemaLoader = require('./legacy-compound-schema-loader');

'use strict';

var exportedObject = function init(compound, Schema, AbstractClass) {

    if (global.railway) {
        global.railway.orm = exports;
    } else {
        compound.orm = {
            Schema: Schema,
            AbstractClass: AbstractClass
        };
        if (compound.app.enabled('noeval schema')) {
            compound.orm.schema = (0, _legacyCompoundSchemaLoader.legacycompoundschemaloaderjs)(Schema, compound.root + '/db/schema', compound.app.get('database'), compound);
            if (compound.app.enabled('autoupdate')) {
                compound.on('ready', function () {
                    compound.orm.schema.forEach(function (s) {
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
        var railway = './lib/railway',
            init;
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

exports.legacycompoundinitjs = exportedObject;
;
