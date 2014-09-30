'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
    .controller('MainCtrl', function ($scope, PhotoService) {
        $scope.photos = PhotoService.getAll().response;

        angular.forEach($scope.photos, function (value) {

            console.log("[value]: "+angular.fromJson(value.id));
        });


    });
