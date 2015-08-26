define(function () {
    'use strict';

    var OldInterface = function () { };

    OldInterface.prototype.doSomethingOld = function () {
        console.log('doing the old thing');
    };

    return new OldInterface();
});
