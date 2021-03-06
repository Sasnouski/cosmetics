'use strict';

angular.module('cosmetics')
  .controller('ProductCtrl', ['$scope', 'wine', '$routeParams', function ($scope, wine, $routeParams) {
    var productId = $routeParams.productID;
    $scope.products = wine.getData();
    for(var i=0; i<$scope.products.length; i++){
      if ($scope.products[i].name === productId) {
        $scope.product =  $scope.products[i];
      }
    }
    $scope.change = function(image){
      $scope.product.thumbnail = image.imgUrl;
      
    }

  }]);