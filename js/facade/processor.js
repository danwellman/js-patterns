define(function () {
    'use strict';

    return {
        processString: function (string) {
            return string.substring(0, string.length / 2);
        },
        processNumber: function (number) {
            return number * number;
        },
        processBoolean: function (bool) {
            return !bool;
        },
        processArray: function (array) {
            return array.length;
        },
        processObject: function (object) {
            return Object.keys(object).length;
        }
    }
});
