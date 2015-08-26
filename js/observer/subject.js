define(function (require) {
    'use strict';

    var Observers = require('observer/observers');

    var Collection = function (items) {
        this.observers = new Observers();
        this.collection = items || [];
    };

    Collection.prototype.observe = function (observer) {
        this.observers.add(observer);
    };

    Collection.prototype.unObserve = function (observer) {
        this.observers.remove(observer);
    };

    Collection.prototype.notify = function (event, data) {
        this.observers.get().forEach(function (observer) {
            observer.notify(event, data);
        });
    };

    Collection.prototype.add = function (item) {
        this.collection.push(item);
        this.notify('added', item);
    };

    Collection.prototype.remove = function (itemToRemove) {
        this.collection = this.collection.filter(function (item) {
            if (item !== itemToRemove) {
                return true;
            }
            this.notify('removed', item);
            return false;
        }, this);
    };

    return Collection;
});
