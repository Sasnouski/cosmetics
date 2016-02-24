'use strict';

angular.module('cosmetics', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'filters',
  'ui.bootstrap'
])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: '../views/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
          'ServiceData': function (posts) {
            return posts.promise;
          }
        }
      })
      .when('/home/:postID', {
        templateUrl: '../views/home/post.html',
        controller: 'PostCtrl',
        resolve: {
          'ServiceData': function (posts) {
            return posts.promise;
          }
        }
      })
      .when('/catalog', {
        templateUrl: '../views/catalog/catalog.html',
        controller: 'CatalogCtrl',
        resolve: {
          'ServiceData': function (wine) {
            return wine.promise;
          }
        }
      })
      .when('/catalog/:productID', {
        templateUrl:'../views/catalog/product.html',
        controller:'ProductCtrl',
        resolve: {
          'ServiceData': function (wine) {
            return wine.promise;
          }
        }
      })
      .when('/contact', {
        templateUrl: '../views/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/about', {
        templateUrl: '../views/about/about.html',
        controller: 'AboutCtrl'
      })
      .when('/admin', {
        templateUrl: '../views/admin/admin.html',
        controller: 'AdminCtrl'
      })
      .when('/admin/posts', {
        templateUrl: '../views/admin/admin.html',
        controller: 'AdminCtrl',
        resolve: {
          'ServiceData': function (posts) {
            return posts.promise;
          }
        }
      })
      .when('/admin/products', {
        templateUrl: '../views/admin/admin.html',
        controller: 'AdminCtrl',
        resolve: {
          'ServiceData': function (wine) {
            return wine.promise;
          }
        }
      })
      .when('/admin/posts/create', {
        templateUrl: '../views/admin/postsCreate.html',
        controller: 'AdminCtrl',
        resolve: {
          'ServiceData': function (posts) {
            return posts.promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/home'
      });
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  }]);