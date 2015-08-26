define(function (require) {
    'use strict';

    return {
        init: function () {

            var iterator = require('iterator/iterator'),
                testArray = [{ something: 'yay', other: 123 }, { something: 'test', other: 456 }],
                myArrayIterator = iterator.build(testArray),
                testString = 'teststring',
                myStringIterator = iterator.build(testString);

            console.log(myArrayIterator.next());
            console.log(myArrayIterator.next());

            while (!myStringIterator.isDone()) {
                console.log(myStringIterator.next());
            }

            console.log(myStringIterator.reset().take(4).join(''));
        }

    };

});
