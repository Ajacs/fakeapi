'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
  .controller('AlbumCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
