define(function (require) {
    'use strict';

    var newInterface = require('adapter/newInterface');

    return {
        doSomethingOld: function () {
            return newInterface.doSomethingNew('new thing');
        }
    };
});
