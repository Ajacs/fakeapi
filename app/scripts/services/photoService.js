'use strict';

/**
 * @ngdoc service
 * @name fakeApiApp.Photo
 * @description
 * # Photo
 * Service in the fakeApiApp.
 */
angular.module('fakeApiApp')
    .factory('PhotoService', function Photo($http) {


        return {
            getAll: function () {
                var request = $http({
                    method: 'GET', url: 'http://jsonplaceholder.typicode.com/photos'
                });
                return(request.then(this.handleSuccess, this.handleError));
            },
            handleError: function (response) {
                console.log('ERROR');
                // The API response from the server should be returned in a
                // nomralized format. However, if the request was not handled by the
                // server (or what not handles properly - ex. server error), then we
                // may have to normalize it on our end, as best we can.
                if (
                    !angular.isObject(response.data) || !response.data.message
                    ) {
                    return( $q.reject("An unknown error occurred.") );
                }
                // Otherwise, use expected error message.
                return( $q.reject(response.data.message) );
            },
            handleSuccess: function (response) {
                console.log('Success');
                console.log("Length of data: " + response.data.length);
                angular.forEach(response.data, function (value) {
                    console.log("VALUE: " + value);
                    console.log(value.title);
                });
                response.data;
            }
        }
        // AngularJS will instantiate a singleton by calling "new" on this function
    });
