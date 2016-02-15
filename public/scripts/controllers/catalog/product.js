'use strict';

angular.module('cosmetics')
  .controller('ProductCtrl', ['$scope', 'phones', '$log', '$routeParams', function ($scope, phones, $log, $routeParams) {
    var productId = $routeParams.productID;
    $scope.products = phones.getData();
    for(var i=0; i<$scope.products.length; i++){
      if ($scope.products[i].itemTitle === productId) {
        $scope.product =  $scope.products[i];
      }
    }

  }]);