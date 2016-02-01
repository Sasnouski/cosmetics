'use strict';

angular.module('cosmetics')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };
  }]);
