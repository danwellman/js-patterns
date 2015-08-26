define(function (require) {
    'use strict';

    return {
        init: function () {

            var Node = require('composite/node'),
                root = new Node('Fred'),
                child1 = new Node('John'),
                child2 = new Node('Jane'),
                child3 = new Node('Jack'),
                child4 = new Node('Jill'),
                child5 = new Node('James'),
                child6 = new Node('Jess');

            root.addChild(child1);
            root.addChild(child2);

            child2.addChild(child3);
            child2.addChild(child4);

            child4.addChild(child5);

            child5.addChild(child6);

            //root.traverseDown();
            //child6.traverseDown();

            //child6.traverseUp();
            root.traverseUp();
        }

    };

});
