"use strict";

var _init = require("./init.js");

var should = _interopRequireWildcard(_init);

var _ = require("../");

var jugglingdb = _interopRequireWildcard(_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('jugglingdb', function () {
    it('should expose version', function () {
        jugglingdb.version.should.equal(require('../package.json').version);
    });
});
