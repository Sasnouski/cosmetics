'use strict';

angular.module('cosmetics')
  .controller('ContactCtrl', ['$scope', function ($scope) {
    $scope.feedback = {

    };
    $scope.save = function() {
      $scope.$broadcast('show-errors-check-validity');
      if ($scope.feedback.$invalid) { return; }
      // code to add the user
    };
    $scope.reset = function(){
      $scope.$broadcast('reset');

    }

  }]);
