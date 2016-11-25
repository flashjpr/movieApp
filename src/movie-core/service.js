/**
 * Created by flash on 25/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('movieCore', ['ngResource'])
        .factory('popularMovies', popularMovies);

    popularMovies.$inject = ['$resource'];

    function popularMovies($resource) {
        var token = 'ceSaMaiSpunaSiCopiiiAstia';
        return $resource('popular/:movieId', {movie: '@id'}, {
            update: {
                method: 'PUT'
            },
            get: {
                method: 'GET',
                headers: {'authToken': token }
            },
            query: {
                method: 'GET',
                headers: {'authToken': token }
            },
            save: {
                method: 'POST',
                headers: {'authToken': token }
            },
            remove: {
                method: 'DELETE',
                headers: {'authToken': token }
            }
        })
    }

})();


