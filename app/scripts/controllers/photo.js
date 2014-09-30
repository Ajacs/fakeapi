'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
  .controller('PhotoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
