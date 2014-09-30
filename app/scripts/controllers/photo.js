'use strict';

/**
 * @ngdoc function
 * @name fakeApiApp.controller:PhotoCtrl
 * @description
 * # PhotoCtrl
 * Controller of the fakeApiApp
 */
angular.module('fakeApiApp')
    .controller('PhotoCtrl', function ($scope, PhotoService) {

        PhotoService.getAll().then(
            function (response) {
                $scope.photos = response.data;
            },
            function (response) {
                console.log('fail... lol');
            }
        )


        $scope.addPhoto = function () {
            window.alert('Add new photo');
        }


        $scope.deletePhoto = function () {
            window.alert('Delete photo');
        }


    });
