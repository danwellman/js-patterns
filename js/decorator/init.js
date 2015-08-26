define(function (require) {
    'use strict';

    return {
        init: function () {

            var user1, user2,
                User = require('decorator/user'),
                execDecorator = require('decorator/decorators/exec'),
                adminDecorator = require('decorator/decorators/admin');

            user1 = new User('user1');
            user1.decoratePermissions(execDecorator);

            user2 = new User('user2');
            user2.decoratePermissions(adminDecorator);

            console.log(user1.id, user1.getPermissions());
            console.log(user2.id, user2.getPermissions());
        }

    };

});
