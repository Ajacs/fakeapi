'use strict';

/**
 * @ngdoc service
 * @name fakeApiApp.Photo
 * @description
 * # Photo
 * Service in the fakeApiApp.
 */
angular.module('fakeApiApp')
    .factory('PhotoService', function Photo($http,$cacheFactory) {


        return {
            getAll: function () {

                var promise = $http({
                    method: 'GET', url: 'http://jsonplaceholder.typicode.com/photos'
                });
                return promise
            }
        }
        // AngularJS will instantiate a singleton by calling "new" on this function
    });
