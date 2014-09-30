'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
