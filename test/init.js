import exports from "should";
import * as Schema from "../";
module.exports = exports;

if (!('getSchema' in global)) {
    global.getSchema = function() {
        return new Schema.Schema('memory');
    };
}
