'use strict';

angular.module('cosmetics')
  .controller('CatalogCtrl', ['$scope','$modal', function ($scope, $modal) {
    $scope.list = [
      {
        name: 'first',
        descr: 'first description',
        img: 'images/Smiley.png',
        fullDescr: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'
      },
      {
        name: 'second',
        descr: 'second description',
        img: 'images/Smiley.png',
        fullDescr: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'

      },
      {
        name: 'third',
        descr: 'third description',
        img: 'images/Smiley.png',
        fullDescr: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'

      },
      {
        name: 'fourth',
        descr: 'fourth description',
        img: 'images/Smiley.png',
        fullDescr: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.'

      },
      {
        name: 'fifth',
        descr: 'fifth description',
        img: 'images/Smiley.png'
      }
    ];
    console.log($scope.list[1].img);
    //var myOtherModal = $modal({scope: $scope, templateUrl: 'lib/angular-strap/src/modal/modal.tpl.html', show: false});

    $scope.showModal = function(item) {
      var image = item.img;
      console.log(image);

      $modal({
        controller: 'CatalogCtrl',
        templateUrl: 'views/modal.html',
        title: item.name,
        thumb: item.img,
        content: item.fullDescr,
        show: true
      });
    };
  }]);
