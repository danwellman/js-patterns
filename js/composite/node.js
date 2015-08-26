define(function () {
    'use strict';

    var Person = function (name) {
        this.name = name;
        this.children = [];
        this.parent = null;
    };

    Person.prototype.addChild = function (child) {
        this.children.push(child);
        child.parent = this;
    };

    Person.prototype.traverseUp = function () {
        if (this.parent) {
            console.log(this.name + ' is the child of ' + this.parent.name);
            this.parent.traverseUp();
        } else {
            console.log(this.name + ' is the root node');
        }
    };

    Person.prototype.traverseDown = function () {
        if (this.children.length) {
            this.children.forEach(function (child) {
                console.log(this.name + ' is the parent of ' + child.name);
                child.traverseDown();
            }, this);
        } else {
            console.log(this.name + ' is a leaf node');
        }
    };

    return Person;
});
