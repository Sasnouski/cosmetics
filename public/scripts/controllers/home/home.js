'use strict';

angular.module('cosmetics')
  .controller('HomeCtrl', ['$scope','$http','$log', function ($scope, $http, $log) {
    $http.get('/json/posts.json')
      .success(function(data){
        $scope.maxSize = 5;
        $scope.numPerPage = 2;
        $scope.currentPage = 1;
        $scope.numPages = function () {
          return Math.ceil(data.length / $scope.numPerPage);
        };
        $scope.$watch('currentPage + numPerPage', function() {
          var begin = (($scope.currentPage - 1) * $scope.numPerPage)
            , end = begin + $scope.numPerPage;

          $scope.articles = data.slice(begin, end);
          $scope.totalItems = data.length;
        });
    });



  }]);




