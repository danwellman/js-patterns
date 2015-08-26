define(function (require) {
    'use strict';

    var Handler = require('cor/handler'),
        smsHandler = require('cor/handlers/sms'),
        callHandler;

    callHandler = new Handler('call', handleCall, smsHandler);

    function handleCall(call) {
        console.log('Call placed to number', call.number, 'from number', call.ownNumber);
    }

    return callHandler;
});
