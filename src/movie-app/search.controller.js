/**
 * Created by flash on 27/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('movieApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$location'];

    function SearchController($location) {
        this.search = function () {
            if(this.query) {
                $location.path('/results').search('q', this.query);
            }
        };
    }

})();


