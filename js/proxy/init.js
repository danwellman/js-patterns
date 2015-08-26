define(function (require) {
    'use strict';

    return {
        init: function () {

            var myProxy,
                slowObjectProxy = require('proxy/slowObjectProxy');

            myProxy = slowObjectProxy.init();
            myProxy.someMethod();
        }

    };

});
