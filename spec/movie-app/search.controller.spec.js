/**
 * Created by flash on 27/11/2016.
 */
describe('Search Controller', function () {
    var $scope = {};
    var $location = {};
    var $controller;

    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$controller_, _$location_) {
        $controller = _$controller_
        $location = _$location_;
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
});