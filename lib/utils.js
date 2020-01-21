function safeRequire(module) {
    try {
        return require(module);
    } catch (e) {
        console.log('Run "npm install jugglingdb ' + module + '" command to use jugglingdb using ' + module + ' database engine');
        process.exit(1);
    }
}

var exported_safeRequire = safeRequire;
export { exported_safeRequire as safeRequire };

