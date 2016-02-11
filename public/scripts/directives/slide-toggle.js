'use strict';

angular.module('cosmetics').
  directive('slideToggle',[ function() {
    return {
      restrict: 'A',
      link: function(scope, el, attrs) {
        el.bind('click', function() {

          console.log(el)
          console.log(attrs.class)

        });

      }
    }
  }]);
