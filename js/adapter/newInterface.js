define(function () {
    'use strict';

    var NewInterface = function () { };

    NewInterface.prototype.doSomethingNew = function (newArg) {
        console.log('doing the ', newArg);
    };

    return new NewInterface();
});
