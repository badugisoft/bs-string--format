var path = require('path'),
    format = require(path.join(__dirname, 'index'));

if (!String.prototype.format) {
    String.prototype.format = function() {
        'use strict';
        return format.apply(null, [this].concat(Array.prototype.slice.call(arguments)));
    };
}
