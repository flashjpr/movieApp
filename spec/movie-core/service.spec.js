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
        $httpBackend.verifyNoOutstandingRequest();
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
    });

    it('should authenticate requests', function () {
        // "authToken": "ceSaMaiSpunaSiCopiiiAstia", "Accept": "application/json, text/plain, */*"
        var headerData = function (headers) {
            return headers.authToken === 'ceSaMaiSpunaSiCopiiiAstia';
        };
        var matchAny = /.*/;

        // re-used (1)
        $httpBackend.whenGET(matchAny, headerData)
            .respond(200);

        // not re-used
        $httpBackend.expectPOST(matchAny, matchAny, headerData)
            .respond(200);

        $httpBackend.expectPUT(matchAny, matchAny, headerData)
            .respond(200);

        $httpBackend.expectDELETE(matchAny, headerData)
            .respond(200);

        var popularMovie = {id: 'tt0076759', description: 'Cool movie, best that I have seen'};

        popularMovies.query();// (1) here
        popularMovies.get({ id : 'tt0076759'});// (1) and here

        new popularMovies(popularMovie).$save();
        new popularMovies(popularMovie).$update();
        new popularMovies(popularMovie).$remove();

        expect($httpBackend.flush).not.toThrow();
    })

});
