'use strict';

angular.module('cosmetics')
  .controller('AdminProductsCtrl', ['$scope', 'wine', function ($scope, wine) {
    
    $scope.products = wine.getData();

    $scope.isExpand = false;
    $scope.expand = function(index) {
      $scope.products[index].isExpand = !$scope.products[index].isExpand;
      if($scope.products[index].isExpand == true){
        $scope.products[index].spanClass = 'glyphicon glyphicon-minus';
      }
      else{
        $scope.products[index].spanClass = 'glyphicon glyphicon-plus';
      }

    };
  }]);
