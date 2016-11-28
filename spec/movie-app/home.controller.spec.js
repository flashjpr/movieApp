/**
 * Created by flash on 28/11/2016.
 */
describe('HomeController',function () {
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

    var $controller;
    var $interval;

    beforeEach(module('movieApp'));

    beforeEach(inject(function (_$controller_, _$interval_) {
        $controller = _$controller_
        $interval = _$interval_;
    }));


    it('should rotate popular movies every 5 seconds', function () {
        $this = $controller('HomeController', { $interval:$interval});
        // default movie
        expect($this.results.Title).toBe(results[0].Title);
        // should update after 5 s
        $interval.flush(5000);
        expect($this.results.Title).toBe(results[1].Title);
        // should update after 5 s
        $interval.flush(5000);
        expect($this.results.Title).toBe(results[2].Title);
        // should return to default
        $interval.flush(5000);
        expect($this.results.Title).toBe(results[0].Title);
    });
});