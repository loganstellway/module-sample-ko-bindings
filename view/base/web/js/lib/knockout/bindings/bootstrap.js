define(['underscore'], function (_) {
    'use strict';

    return function(bindings) {
        return _.extend(bindings, {
            test: require(['lskobindings/example'])
        });
        return bindings;
    };
});
