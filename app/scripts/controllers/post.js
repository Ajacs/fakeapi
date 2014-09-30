'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:PostCtrl
 * @description
 * # PostCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
  .controller('PostCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
