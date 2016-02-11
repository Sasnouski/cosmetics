'use strict';

angular.module('filters', [])
  .filter('search', function () {
    return function(input) {
      return input;
    };
  });


