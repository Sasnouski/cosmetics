'use strict';

angular.module('cosmetics')
  .controller('AdminCtrl', ['$scope', 'wine', '$location', function ($scope, wine, $location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.postsListTemplate = '/views/admin/postsList.html';
    $scope.changeTemplate = function(){
      if($location.path() == '/admin/posts'){
        return '/views/admin/postsList.html';
      }
      if($location.path() == '/admin/products'){
        return '/views/admin/productsList.html';
      }
    }
  }]);
