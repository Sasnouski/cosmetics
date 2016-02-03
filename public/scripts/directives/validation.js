'use strict';

angular.module('cosmetics').
  directive('showErrors', function() {
    return {
      restrict: 'A',
      require:  '^form',
      link: function(scope, el, attrs, formCtrl) {
        var inputEl   = el[0].querySelector("[name]");
        var inputNgEl = angular.element(inputEl);
        var inputName = inputNgEl.attr('name');
        inputNgEl.bind('blur', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        });
        inputNgEl.bind('blur', function() {
          el.toggleClass('show-success', formCtrl[inputName].$valid);
        });
        scope.$on('show-errors-check-validity', function() {
          el.toggleClass('has-error', formCtrl[inputName].$invalid);
        });
        scope.$on('reset', function() {
            el.removeClass('has-error');
            el.removeClass('show-success');
        });
      }
    }
  });

