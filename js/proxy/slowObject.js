define(function () {
    'use strict';

    var SlowObject = function () {
        this.someMethod = function () {
            console.log('some method on the slow object was invoked');
        }
    };

    return {
        init: function () {
            for (var x = 0, max = 1000; x < max; x++) {
                console.log('slowness...');
            }
            return new SlowObject();
        }
    }
});
