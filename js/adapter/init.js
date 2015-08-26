define(function (require) {
    'use strict';

    return {
        init: function () {

            var oldInterfaceAdapter = require('adapter/oldInterfaceAdapter');

            oldInterfaceAdapter.doSomethingOld();
        }

    };

});
