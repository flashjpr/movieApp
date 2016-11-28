/**
 * Created by flash on 28/11/2016.
 */
describe('Results Controller', function () {

    var results = {
        "Search": [
            {
                "Title": "Star Wards: Episode IV - A New Hope",
                "Year": "1977",
                "imdbID": "tt0076759",
                "Type": "movie"
            },
            {
                "Title": "Star Wards: Episode V - The Empire Strikes Back",
                "Year": "1980",
                "imdbID": "tt0080684",
                "Type": "movie"
            },
            {
                "Title": "Star Wards: Episode VI - Return of the Jedi",
                "Year": "1983",
                "imdbID": "tt0086190",
                "Type": "movie"
            }
        ]
    };
    var $controller;
    var $scope;

    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_;
        $scope = {};
    }));

    it('should load search results', function () {
        $controller('ResultsController', {$scope: $scope});
        expect($scope.results[0].data.Title).toBe(results.Search[0].Title);
        expect($scope.results[1].data.Title).toBe(results.Search[1].Title);
        expect($scope.results[2].data.Title).toBe(results.Search[2].Title);
    });
});