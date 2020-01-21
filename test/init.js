import exports from "should";
import semicov_moduleObject from "semicov";
import * as Schema from "../";
module.exports = exports;

if (!process.env.TRAVIS) {
    if (typeof __cov === 'undefined') {
        process.on('exit', function () {
            semicov_moduleObject.report();
        });
    }

    semicov_moduleObject.init('lib');
}

if (!('getSchema' in global)) {
    global.getSchema = function() {
        return new Schema.Schema('memory');
    };
}
