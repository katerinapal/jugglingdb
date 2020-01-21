import when_moduleObject from "when";
import * as index from "./index";
var isNodeSix = process.versions.node >= '6';

if (!isNodeSix) {
    global.Promise = when_moduleObject.Promise;
}

module.exports = isNodeSix
    ? index
    : require('./build/index');


