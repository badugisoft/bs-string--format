var path = require('path'),
    assert = require('assert'),
    format = require(path.join(__dirname, 'index'));

describe('format', function() {
    it('basic', function(){
        assert.equal(format('format {a}', {a:1}), 'format 1');
        assert.equal(format('format {a}', {a:1.2}), 'format 1.2');
        assert.equal(format('format {a}', {a:'str'}), 'format str');
        assert.equal(format('format {b}', {a:'str'}), 'format {b}');
    });

    it('nested', function(){
        assert.equal(format('format {a.a}', {a:{a:1}}), 'format 1');
        assert.equal(format('format {a.a.a}', {a:{a:{a:1}}}), 'format 1');
        assert.equal(format('format {a.a.a}', {a:{a:1}}), 'format {a.a.a}');
    });

    it('array', function(){
        assert.equal(format('format {0}', 1), 'format 1');
        assert.equal(format('format {0}', 1, 2), 'format 1');
        assert.equal(format('format {0} {1}', 1, 2), 'format 1 2');
        assert.equal(format('format {1} {0}', 1, 2), 'format 2 1');
        assert.equal(format('format {0} {1}', [1, 2]), 'format 1 2');
    });
});

describe('polyfill', function() {
    it('load', function() {
        assert.doesNotThrow(function(){
            require(path.join(__dirname, 'polyfill.js'));
        });
    });

    it('call', function() {
        require(path.join(__dirname, 'polyfill.js'));
        assert.equal('format {a}'.format({a: 1}), 'format 1');
    });
});
