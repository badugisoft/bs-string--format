var flat = require('flat'),
    escapeRegexp = require('escape-regexp');

function format(str, obj) {
    if (arguments.length > 2) {
        obj = Array.prototype.slice.call(arguments, 1);
    }
    else if (arguments.length === 2){
        switch (typeof obj) {
            case 'string':
            case 'number':
                obj = [obj];
                break;
            case 'object':
                if (obj === null) {
                    obj = [obj];
                }
                break;
        }
    }

    obj = flat(obj || {});

    for (var name in obj) {
        str = str.replace(new RegExp('\\{' + escapeRegexp(name) + '\\}', 'g'), obj[name]);
    }

    return str;
}


module.exports = exports = format;
