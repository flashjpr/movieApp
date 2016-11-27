/**
 * Created by flash on 27/11/2016.
 */
describe('Search Controller', function () {
    var $scope = {};
    var $location = {};

    beforeEach(inject(function (_$controller_, _$location_) {
        $location = _$location_;
        $scope = {};

        var fn = function ($scope) {
            $scope.search = function () {
                if($scope.query) {
                    $location.path('/results').search('q',$scope.query);
                }
            };
        };

        _$controller_(fn, {$scope: $scope, $location: $location});
    }));

    it('should redirect to the query results page for a non-empty query', function () {
        $scope.query = 'star wars';
        $scope.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });


    it('should not redirect to query results page if the query is empty', function () {
        $scope.query = '';
        $scope.search();
        expect($location.url()).toBe('');
    });
});