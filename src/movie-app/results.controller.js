/**
 * Created by flash on 28/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('movieApp')
        .controller('ResultsController', ResultsController);

    ResultsController.$inject = ['$scope', '$location'];

    /* @ngInject */
    function ResultsController($scope, $location) {

        $scope.results = [];
        $scope.results.push({data: {"Title": "Star Wards: Episode IV - A New Hope","Year": "1977","imdbID": "tt0076759","Type": "movie"}});
        $scope.results.push({data: {"Title": "Star Wards: Episode V - The Empire Strikes Back","Year": "1980","imdbID": "tt0080684","Type": "movie"}});
        $scope.results.push({data: {"Title": "Star Wards: Episode VI - Return of the Jedi","Year": "1983","imdbID": "tt0086190","Type": "movie"}});

    }

})();

