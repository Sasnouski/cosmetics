'use strict';

angular.module('cosmetics')
  .controller('PostCtrl', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    var postId = $routeParams.postID;
    $scope.post = {};
    $http.get('/json/posts.json')
      .success(function(data){
        $scope.articles = data;
        for(var i=0; i<data.length; i++){
          if (data[i].title === postId) {
            $scope.post =  data[i];
          }
        }
      });


  }]);
