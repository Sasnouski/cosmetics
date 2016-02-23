'use strict';

angular.module('cosmetics').service('posts', function($http) {
  var data = null;
  var promise = $http.get('/json/posts.json').success(function(result){
    data = result;
  });
  return {
    promise: promise,
    setData: function (result) {
      data = result;
    },
    getData: function () {
      return data;
    }
  };
});
