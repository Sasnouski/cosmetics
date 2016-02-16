'use strict';

angular.module('cosmetics')
  .controller('CatalogCtrl', ['$scope','$log','$filter','wine', function ($scope, $log, $filter, wine) {

    $scope.phonesCollection = wine.getData();

    // Pagination
    $scope.filteredPhonesCollection = [];
    $scope.maxSize = 10;
    $scope.numPerPage = 4;
    $scope.currentPage = 1;
    $scope.setPages =  function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage),
          end = begin + $scope.numPerPage;
      $scope.numPages = function () {
        return Math.ceil($scope.filteredPhonesCollection.length / $scope.numPerPage);
      };
      $scope.list = $scope.filteredPhonesCollection.slice(begin, end);
      $scope.totalItems = $scope.filteredPhonesCollection.length;
    };
    $scope.$watch('currentPage', function () {
      $scope.setPages();
    });

    // Filters
    $scope.$watchGroup(['searchBy.itemTitle', 'orderBy.rating', 'orderBy.price'],function(one  ){
      $scope.filteredPhonesCollection = $filter('filter')($scope.phonesCollection, { name: one[0] });
      $scope.filteredPhonesCollection = (one[1] == true) ? $filter('orderBy')($scope.filteredPhonesCollection, 'rating') : $filter('orderBy')($scope.filteredPhonesCollection, '-rating');
      $scope.filteredPhonesCollection = (one[2] == true) ? $filter('orderBy')($scope.filteredPhonesCollection, 'price') : $filter('orderBy')($scope.filteredPhonesCollection, '-price');
      $scope.setPages();
      console.log(one)
    });
    //$scope.$watch('searchBy.itemTitle', function (title) {
    //  $scope.filteredPhonesCollection = $filter('filter')($scope.phonesCollection, { itemTitle: title });
    //  console.log($scope.filteredPhonesCollection.length)
    //  $scope.setPages();
    //});
    //$scope.$watch('orderBy.rating', function (check) {
    //  $scope.filteredPhonesCollection = (check == true) ? $filter('orderBy')($scope.phonesCollection, 'rating') : $filter('orderBy')($scope.phonesCollection, '-rating');
    //  console.log($scope.filteredPhonesCollection.length)
    //  $scope.setPages();
    //});
    //$scope.$watch('orderBy.price', function (check) {
    //  $scope.filteredPhonesCollection = (check == true) ? $filter('orderBy')($scope.phonesCollection, 'price.min') : $filter('orderBy')($scope.phonesCollection, '-price.min');
    //  console.log($scope.filteredPhonesCollection.length)
    //  $scope.setPages();
    //});
    $scope.priceRange = function(obj) {
      return obj.price > $scope.price.min && obj.price <= $scope.price.min;
    };

    $scope.isdisplay = false;
    $scope.showFilterForm = function() {
        $scope.isdisplay = !$scope.isdisplay;
    };


  }]);
