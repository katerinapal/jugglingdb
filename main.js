import when_moduleObject from "when";
import index_moduleDefault from "./index";
var isNodeSix = process.versions.node >= '6';

if (!isNodeSix) {
    global.Promise = when_moduleObject.Promise;
}

export default isNodeSix
    ? index_moduleDefault
    : require('./build/index');;


