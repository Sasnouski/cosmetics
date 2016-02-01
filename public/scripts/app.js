'use strict';

angular.module('cosmetics', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute'
])
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '../views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/catalog', {
        templateUrl: '../views/catalog.html',
        controller: 'CatalogCtrl'
      })
      .when('/contact', {
        templateUrl: '../views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/about', {
        templateUrl: '../views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode({
      enabled: false,
      requireBase: false
    });
  }]);