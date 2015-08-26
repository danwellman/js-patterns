define(function (require) {
    'use strict';

    return {
        init: function () {

            var moduleA = require('pubsub/moduleA'),
                moduleB = require('pubsub/moduleB');

            moduleB.publishEvent();
            moduleB.publishEvent();
        }

    };

});
