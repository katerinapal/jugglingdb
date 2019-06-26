'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.safeRequire = safeRequire;
function safeRequire(module) {
    try {
        return require(module);
    } catch (e) {
        console.log('Run "npm install jugglingdb ' + module + '" command to use jugglingdb using ' + module + ' database engine');
        process.exit(1);
    }
}
