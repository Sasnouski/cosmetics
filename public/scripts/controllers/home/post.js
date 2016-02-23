'use strict';

angular.module('cosmetics')
  .controller('PostCtrl', ['$scope', 'posts', '$routeParams', function ($scope, posts, $routeParams) {

    var postId = $routeParams.postID;
    $scope.posts = posts.getData();
    for(var i=0; i<$scope.posts.length; i++){
      if ($scope.posts[i].title === postId) {
        $scope.post =  $scope.posts[i];
      }
    }

  }]);
