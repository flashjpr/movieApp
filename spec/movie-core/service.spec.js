/**
 * Created by flash on 25/11/2016.
 */
describe('MovieCore', function () {

    var popularMovies;
    var $httpBackend;

    beforeEach(module('movieCore'));
    
    beforeEach(inject(function (_popularMovies_, _$httpBackend_) {
        popularMovies = _popularMovies_;
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
    });

    it('should create popular movie', function () {

        // var expectedData = function (data) {
        //     return angular.fromJson(data).movieId === 'tt0076759';
        // };
        // var expectedData = '{"movieId":"tt0076759","description":"Nice movie!"}';
        var expectedData = /{"movieId":"tt0076759","description":".*"}/;


        $httpBackend.expectPOST(/./, expectedData)
            .respond(201);

        var popularMovie = new popularMovies({
            movieId: 'tt0076759',
            description: 'Nice movie!'
        });

        popularMovie.$save();

        expect($httpBackend.flush).not.toThrow();
    });

    it('should get popular movie by id', function () {

        $httpBackend.expectGET('popular/tt0076759')
            .respond(200);

        popularMovies.get({movieId: 'tt0076759'});

        expect($httpBackend.flush).not.toThrow();
    });

    it('should update popular movie', function () {

        $httpBackend.expectPUT('popular')
            .respond(200);

        var popularMovie = new popularMovies({
            movieId: 'tt0076759',
            description: 'Cool!'
        });

        popularMovie.$update();
        expect($httpBackend.flush).not.toThrow();
    })

});
