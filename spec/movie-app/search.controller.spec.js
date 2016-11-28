/**
 * Created by flash on 27/11/2016.
 */
describe('Search Controller', function () {
    var $scope = {};
    var $location = {};
    var $controller;
    var $timeout;

    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$controller_, _$location_, _$timeout_) {
        $controller = _$controller_
        $location = _$location_;
        $timeout = _$timeout_;
    }));

    it('should redirect to the query results page for a non-empty query', function () {
        $this = $controller('SearchController', {$location:$location}, {query:'star wars'});
        $this.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should not redirect to query results page if the query is empty', function () {
        $this = $controller('SearchController', {$location: $location}, {query:''});
        $this.search();
        expect($location.url()).toBe('');
    });

    it('should redirect after 1 second of keyboard interrupt', function () {
        $this = $controller('SearchController', {$location: $location, $timeout:$timeout}, {query:'star wars'});
        $this.keyup();
        $timeout.flush();
        expect($timeout.verifyNoPendingTasks).not.toThrow();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should cancel timeout in keydown', function () {
        $this = $controller('SearchController', {$location: $location, $timeout:$timeout}, {query:'star wars'});
        $this.keyup();
        $this.keydown();

        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });

    it('should cancel timeout on search', function () {
        $this = $controller('SearchController', {$location: $location, $timeout:$timeout}, {query:'star wars'});
        $this.keyup();
        $this.search();

        expect($timeout.verifyNoPendingTasks).not.toThrow();
    });
});