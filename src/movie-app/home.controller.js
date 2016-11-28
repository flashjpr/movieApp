/**
 * Created by flash on 28/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('movieApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$interval'];

    /* @ngInject */
    function HomeController($interval) {
        var vm = this;
        var results = [
            {
                "Title": "Star Wards: Episode IV - A New Hope",
                "imdbID": "tt0076759"
            },
            {
                "Title": "Star Wards: Episode V - The Empire Strikes Back",
                "imdbID": "tt0080684"
            },
            {
                "Title": "Star Wards: Episode VI - Return of the Jedi",
                "imdbID": "tt0086190"
            }
        ];
        this.results = results[0];
        var index = 0;
        $interval(function () {
            ++index;
            vm.results = results[index % results.length];
        }, 5000)
    }

})();

