'use strict';

angular.module('cosmetics')
  .controller('CatalogCtrl', ['$scope', function ($scope) {
    $scope.list = [
      {
        name: 'first',
        descr: 'first description',
        img: 'images/Smiley.png'
      },
      {
        name: 'second',
        descr: 'second description',
        img: 'images/Smiley.png'
      },
      {
        name: 'third',
        descr: 'third description',
        img: 'images/Smiley.png'
      },
      {
        name: 'fourth',
        descr: 'fourth description',
        img: 'images/Smiley.png'
      },
      {
        name: 'fifth',
        descr: 'fifth description',
        img: 'images/Smiley.png'
      }
    ];
  }]);
