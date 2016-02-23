'use strict';

angular.module('cosmetics')
  .controller('AdminPostsCtrl', ['$scope', 'wine', '$location', function ($scope, wine, $location) {

    $scope.posts = wine;

  }]);
