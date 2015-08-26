define(function () {
    'use strict';

    var Iterator = function (collection) {
        this.collection = collection;
        this.index = 0;
    };

    Iterator.prototype = {
        constructor: Iterator,
        next: function () {
            return this.collection[this.index++];
        },
        isDone: function () {
            return this.index === this.collection.length;
        },
        reset: function () {
            this.index = 0;
            return this;
        },
        take: function (numberOfItems) {
            var newIndex = this.index + numberOfItems,
                newArr = Array.prototype.slice.call(this.collection, this.index, newIndex);

            this.index = newIndex;
            return newArr;
        }
    };

    return {
        build: function (collection) {
            var keys = Object.keys(collection),
                tempArray = [],
                prop;

            if (typeof collection === 'number') {
                collection = collection.toString();
            }

            if (keys.length) {
                for (prop in collection) {
                    tempArray.push(collection[prop]);
                }
                collection = tempArray;
            }

            if (collection.length) {
                return new Iterator(collection);
            } else {
                throw ('Iterator cannot be built from Boolean, null or undefined');
            }
        }
    }
});
