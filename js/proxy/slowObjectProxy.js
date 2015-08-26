define(function (require) {
    'use strict';

    var SlowObjectProxy, slowObjectInstance,
        slowObject = require('proxy/slowObject');

    SlowObjectProxy = function () {
        this.someMethod = function () {
            var interval;

            if (!slowObjectInstance) {
                slowObjectInstance = slowObject.init();
            } else {
                slowObjectInstance.someMethod();
            }

            interval = window.setInterval(invokeMethodWhenExists, 100);

            function invokeMethodWhenExists() {
                if (slowObjectInstance) {
                    console.log('proxying some method');
                    window.clearInterval(interval);

                    slowObjectInstance.someMethod();
                }
            }
        }
    }

    return {
        init: function () {
            return new SlowObjectProxy();
        }
    }
});
