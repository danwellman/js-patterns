define(function () {
    'use strict';

    var Observer = function (name) {
        this.name = name;
    };

    Observer.prototype.notify = function (event, data) {
        console.log('The event was ', '"' + event + '",', 'the data was', data, 'and I am ', this.name);
    };

    return Observer;
});
