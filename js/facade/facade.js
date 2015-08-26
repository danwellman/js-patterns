define(function (require) {
    'use strict';

    var processor = require('facade/processor');

    return {
        processThing: function (thing) {
            switch (Object.prototype.toString.call(thing)) {
                case '[object String]':
                    return processor.processString(thing);
                    break;
                case '[object Number]':
                    return processor.processNumber(thing);
                    break;
                case '[object Boolean]':
                    return processor.processBoolean(thing);
                    break;
                case '[object Array]':
                    return processor.processArray(thing);
                    break;
                case '[object Object]':
                    return processor.processObject(thing);
                    break;
                default:
                    return 'Unable to process the thing!';
            }
        }
    };
});
