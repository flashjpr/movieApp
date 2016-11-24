/**
 * Created by flash on 23/11/2016.
 */
describe('omdb service', function () {
    var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"362","imdbID":"tt0251413","Type":"game","Response":"True"};
    var starWarsId = 'tt0076759';
    var movieDataById = {"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Rated":"PG","Released":"25 May 1977","Runtime":"121 min","Genre":"Action, Adventure, Fantasy","Director":"George Lucas","Writer":"George Lucas","Actors":"Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing","Plot":"Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.","Language":"English","Country":"USA","Awards":"Won 6 Oscars. Another 48 wins & 28 nominations.","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Metascore":"92","imdbRating":"8.7","imdbVotes":"927,743","imdbID":"tt0076759","Type":"movie","Response":"True"};
    var omdbApi = {};

    beforeEach(module('omdb'));
    beforeEach(inject(function (_omdbApi_) {
        omdbApi = _omdbApi_;
    }));

    it('should return search movie data', function () {
        expect(omdbApi.search('star wars')).toEqual(movieData);
    });

    it('should return movie data by id', function () {
        expect(omdbApi.find(starWarsId)).toEqual(movieDataById);
    })
});
