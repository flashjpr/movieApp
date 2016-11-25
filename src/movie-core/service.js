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

        return $resource('popular/:movieId', {movie: '@id'}, {
            update: {
                method: 'PUT'
            }
        })
    }

})();


