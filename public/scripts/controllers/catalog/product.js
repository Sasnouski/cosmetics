'use strict';

angular.module('cosmetics')
  .controller('ProductCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    var productId = $routeParams.productID;
    $scope.product = {};
    $http.get('/json/phones.json')
      .success(function(data){
        $scope.products = data;
        for(var i=0; i<data.length; i++){
          if (data[i].itemTitle === productId) {
            $scope.product =  data[i];
          }
        }
      });


  }]);