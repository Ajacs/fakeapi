'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
  .controller('TodoCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
