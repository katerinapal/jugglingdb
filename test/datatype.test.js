'use strict';

var _init = require('./init.js');

var should = _interopRequireWildcard(_init);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var db = void 0,
    Model = void 0;

describe('datatypes', function () {

    before(function (done) {
        db = getSchema();
        Model = db.define('Model', {
            str: String,
            date: Date,
            num: Number,
            bool: Boolean
        });
        db.automigrate(function () {
            Model.destroyAll(done);
        });
    });

    it('should keep types when get read data from db', function () {
        var d = new Date(),
            id = void 0;

        d.setMilliseconds(0);

        return Model.create({
            str: 'hello',
            date: d,
            num: '3',
            bool: 1
        }).then(function (m) {
            should.exist(m && m.id);
            m.str.should.be.a.String;
            m.num.should.be.a.Number;
            m.bool.should.be.a.Boolean;
            id = m.id;
            return Model.find(id);
        }).then(function (m) {
            should.exist(m);
            m.str.should.be.a.String;
            m.num.should.be.a.Number;
            m.bool.should.be.a.Boolean;
            m.date.should.be.an.instanceOf(Date);
            m.date.toString().should.equal(d.toString(), 'Time must match');
            return Model.findOne();
        }).then(function (m) {
            should.exist(m);
            m.str.should.be.a.String;
            m.num.should.be.a.Number;
            m.bool.should.be.a.Boolean;
            m.date.should.be.an.instanceOf(Date);
            m.date.toString().should.equal(d.toString(), 'Time must match');
        });
    });

    it('should convert "false" to false for boolean', function () {
        var m = new Model({ bool: 'false' });
        m.bool.should.equal(false);
    });
});
