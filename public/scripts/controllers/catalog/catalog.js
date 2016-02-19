'use strict';

angular.module('cosmetics')
  .controller('CatalogCtrl', ['$scope','$log','$filter','wine', function ($scope, $log, $filter, wine) {

    $scope.wineCollection = wine.getData();

    // Pagination
    $scope.filteredCollection = [];
    $scope.maxSize = 10;
    $scope.numPerPage = 4;
    $scope.currentPage = 1;
    $scope.setPages =  function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage),
          end = begin + $scope.numPerPage;
      $scope.numPages = function () {
        return Math.ceil($scope.filteredCollection.length / $scope.numPerPage);
      };
      $scope.list = $scope.filteredCollection.slice(begin, end);
      $scope.totalItems = $scope.filteredCollection.length;
    };
    $scope.$watch('currentPage', function () {
      $scope.setPages();
    });

    // Filters
    $scope.$watch('searchBy.itemTitle', function (title) {
      $scope.filteredCollection = $filter('filter')($scope.wineCollection, { name: title });
      $scope.setPages();
    });
    $scope.$watch('orderBy.rating', function (check) {
      $scope.filteredCollection = (check == true) ? $filter('orderBy')($scope.filteredCollection, 'rating') : $filter('orderBy')($scope.filteredCollection, '-rating');
      $scope.setPages();
    });
    $scope.$watch('orderBy.price', function (check) {
      $scope.filteredCollection = (check == true) ? $filter('orderBy')($scope.filteredCollection, 'price') : $filter('orderBy')($scope.filteredCollection, '-price');
      $scope.setPages();
    });
    //$scope.priceRange = function(obj) {
    //  return obj.price > $scope.price.min && obj.price <= $scope.price.min;
    //};

    $scope.isdisplay = false;
    $scope.showFilterForm = function() {
        $scope.isdisplay = !$scope.isdisplay;

    };


  }]);
