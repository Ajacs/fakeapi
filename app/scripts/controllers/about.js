'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
