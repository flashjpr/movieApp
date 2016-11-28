/**
 * Created by flash on 28/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('movieApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$scope', '$location', 'omdbApi'];

    /* @ngInject */
    function ResultsController($scope, $location, omdbApi) {
        var query = $location.search().q;
        omdbApi.search(query)
            .then(function(data) {
                $scope.results = data.Search;
            })
            .catch(function () {
                $scope.errorMessage = 'Something went wrong';
            })
    }

})();
