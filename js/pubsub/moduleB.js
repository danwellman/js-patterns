define(function (require) {
    'use strict';

    var pubSub = require('pubsub/pubsub');

    return {
        publishEvent: function () {
            var data = {
                something: 'some data'
            };

            pubSub.publish('atopic', data);
        }
    };
});
