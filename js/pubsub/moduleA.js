define(function (require) {
    'use strict';

    var pubSub = require('pubsub/pubsub'),
        subscription;

    subscription = pubSub.subscribe('atopic', function (data) {
        console.log('atopic was published with data: ' + data.something);
        subscription.dispose();
    });
});
