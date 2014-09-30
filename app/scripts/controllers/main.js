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




        PhotoService.getAll().then(function (response) {
            console.log('Success: ' + response.data.length);
            angular.forEach(response.data, function (value) {
                console.log("[value]: " + angular.fromJson(value.id));
            });
            $scope.photos = response.data;
        }, function (response) {
            console.log('error');
        });
//        console.log('MainCOntroller called ...');
//        console.log("Photos.length: " + photos.length);
//        var photos = PhotoService.getAll().response;
//
//        angular.forEach(photos, function (value) {
//
//            console.log("[value]: " + angular.fromJson(value.id));
//        });

    });
