'use strict';

/**
 * @ngdoc overview
 * @name fakeApiApp
 * @description
 * # fakeApiApp
 *
 * Main module of the application.
 */
angular
    .module('fakeApiApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/photos',{
                templateUrl: '../views/photos/photos.html',
                controller: 'PhotoCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });


