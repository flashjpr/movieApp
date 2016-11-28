/**
 * Created by flash on 27/11/2016.
 */
(function () {
    'use strict';

    angular
        .module('movieApp')
        .controller('SearchController', SearchController);

    SearchController.$inject = ['$location', '$timeout'];

    function SearchController($location, $timeout) {
        var vm = this;
        var timeout;
        this.keyup = function () {
            timeout = $timeout(vm.search(), 1000);
        };
        
        this.keydown = function () {
            $timeout.cancel(timeout);
        };
        this.search = function () {
            $timeout.cancel(timeout);
            if(this.query) {
                $location.path('/results').search('q', this.query);
            }
        };
    }

})();


