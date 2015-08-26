define(function () {
    'use strict';

    var User = function (id) {
        this.id = id;
        this.getPermissions = function () {
            return 'public:read';
        }
    };

    User.prototype.decoratePermissions = function (decorator) {
        this.getPermissions = decorator.getPermissions;
    };

    return User;
});
