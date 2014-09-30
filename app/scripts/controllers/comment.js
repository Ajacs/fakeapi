'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:CommentCtrl
 * @description
 * # CommentCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
  .controller('CommentCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
