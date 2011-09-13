var assert = require('assert'),
    fs = require('fs'),
    yui = require('./lib/yui-compressor/index');

yui.compile(fs.readFileSync('./src/index.coffee').toString(), function (err, res) {
    assert.ok(err);
    yui.compile(fs.readFileSync('./lib/yui-compressor/index.js').toString(), function (err, res) {
        assert.ok(!err);
        assert.ok(res);
        assert.equal(typeof res, 'string');
    });
});
