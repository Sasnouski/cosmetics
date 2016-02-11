'use strict';

angular.module('cosmetics')
  .controller('CatalogCtrl', ['$scope','$timeout','$filter','$http', function ($scope, $timeout, $filter, $http) {
    $http.get('/json/phones.json')
      .success(function(data){
        $scope.maxSize = 10;
        $scope.numPerPage = 8;
        $scope.currentPage = 1;
        $scope.numPages = function () {
          return Math.ceil(data.length / $scope.numPerPage);
        };
        $scope.$watch('currentPage + numPerPage', function() {
          var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

          $scope.list = data.slice(begin, end);
          $scope.totalItems = data.length;
        });
      });


    $scope.isdisplay = false;
    $scope.showFilterForm = function() {
        $scope.isdisplay = !$scope.isdisplay;
    };

    $scope.range = {
      minPrice: 0,
      maxPrice: Infinity
    };
    $scope.priceRange = function(obj) {
      return obj.price > $scope.range.minPrice && obj.price <= $scope.range.maxPrice;
    };

  }]);
