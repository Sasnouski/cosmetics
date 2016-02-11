'use strict';

angular.module('cosmetics')
  .controller('ContactCtrl', ['$scope','$timeout', function ($scope, $timeout) {

    $scope.save = function() {
      $scope.$broadcast('show-errors-check-validity');
      if ($scope.feedback.$invalid) { return; }
      
    };





  }]);
