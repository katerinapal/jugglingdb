"use strict";

var _init = require("./init.js");

var should = _interopRequireWildcard(_init);

var _ = require("../");

var Schema = _interopRequireWildcard(_);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

describe('JSON property', function () {
    var schema = void 0,
        Model = void 0;

    it('should be defined', function () {
        schema = getSchema();
        Model = schema.define('Model', { propertyName: Schema.JSON });
        var m = new Model();
        new Boolean('propertyName' in m).should.eql(true);
        should.not.exist(m.propertyName);
    });

    it('should accept JSON in constructor and return object', function () {
        var m = new Model({
            propertyName: '{"foo": "bar"}'
        });
        m.propertyName.should.be.an.Object;
        m.propertyName.foo.should.equal('bar');
    });

    it('should accept object in setter and return object', function () {
        var m = new Model();
        m.propertyName = { 'foo': 'bar' };
        m.propertyName.should.be.an.Object;
        m.propertyName.foo.should.equal('bar');
    });

    it('should accept string in setter and return string', function () {
        var m = new Model();
        m.propertyName = '{"foo": "bar"}';
        m.propertyName.should.be.a.String;
        m.propertyName.should.equal('{"foo": "bar"}');
    });
});
