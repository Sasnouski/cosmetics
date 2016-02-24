'use strict';

angular.module('cosmetics')
  .controller('HomeCtrl', ['$scope','$http', 'posts', function ($scope, $http, posts) {

    $scope.postsCollection = posts.getData();
    $scope.maxSize = 5;
    $scope.numPerPage = 2;
    $scope.currentPage = 1;
    $scope.numPages = function () {
      return Math.ceil($scope.postsCollection.length / $scope.numPerPage);
    };
    $scope.$watch('currentPage + numPerPage', function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage),
          end = begin + $scope.numPerPage;

      $scope.articles = $scope.postsCollection.slice(begin, end);
      $scope.totalItems = $scope.postsCollection.length;
    });

  }]);




