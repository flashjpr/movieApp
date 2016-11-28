/**
 * Created by flash on 28/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('movieApp', ['ui.bootstrap', 'ngRoute', 'omdb'])
        .config(function ($routeProvider) {
            $routeProvider
                .when('/results', {
                    templateUrl: 'movie-app/results.html',
                    controller: 'ResultsController'
                })
                .otherwise({
                    redirectTo: '/'
                })
        });

})();
