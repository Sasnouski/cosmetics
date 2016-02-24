'use strict';

angular.module('cosmetics')
  .controller('AdminCtrl', ['$scope', '$location','$log', 'wine','posts', function ($scope, $location, $log, wine, posts) {

    $scope.posts = posts.getData();
    $log.log('posts - ' + $scope.posts);
    $scope.products = wine.getData();
    $log.log('products - ' + $scope.products);
    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

    $scope.changeTemplate = function(){
      if($location.path() == '/admin/posts'){
        console.log('first');
        return '/views/admin/postsList.html';
      }
      else if($location.path() == '/admin/products'){
        console.log('second');
        return '/views/admin/productsList.html';
      }
    };

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
