define(function (require) {
    'use strict';

    return {
        init: function () {

            var subject, observer, otherObserver, data, moreData,
                Subject = require('observer/subject'),
                Observer = require('observer/observer');

            subject = new Subject();
            observer = new Observer('observer1');
            otherObserver = new Observer('observer2');

            data = {
                prop: 'something'
            };
            moreData = {
                prop: 'something else'
            };

            subject.observe(observer);
            subject.observe(otherObserver);

            subject.add(data);
            subject.add(moreData);

            subject.unObserve(observer);

            subject.remove(data);
        }

    };

});
