define(function (require) {
    'use strict';

    var Handler = require('cor/handler'),
        emailHandler;

    emailHandler = new Handler('email', handleEmail, null);

    function handleEmail(email) {
        console.log('Email sent to', email.recipient, 'message: ', email.message);
    }

    return emailHandler;
});
