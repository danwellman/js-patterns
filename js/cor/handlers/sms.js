define(function (require) {
    'use strict';

    var Handler = require('cor/handler'),
        emailHandler = require('cor/handlers/email'),
        smsHandler;

    smsHandler = new Handler('sms', handleSms, emailHandler);

    function handleSms(sms) {
        console.log('SMS sent to number', sms.number, 'message: ', sms.message);
    }

    return smsHandler;
});
