import * as should from "./init.js";
import * as jugglingdb from "../";

describe('jugglingdb', function() {
    it('should expose version', function () {
        jugglingdb.version.should.equal(require('../package.json').version);
    });
});
