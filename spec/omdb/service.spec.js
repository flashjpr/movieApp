/**
 * Created by flash on 23/11/2016.
 */
describe('omdb service', function () {
    var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.8","imdbVotes":"362","imdbID":"tt0251413","Type":"game","Response":"True"};

    it('should return search movie data', function () {

        var omdbApi = {};

        // anonymous function argument technique
        angular.mock.module(function ($provide) {
            $provide.factory('omdbApi', function () {
                return {
                    search : function (query) {
                        return movieData;
                    }
                }
            })
        });

        // angular.mock.module({
        //     'omdbApi': {
        //         search: function (query) {
        //             return movieData;
        //         }
        //     }
        // });

        angular.mock.inject(function (_omdbApi_) {
            omdbApi = _omdbApi_;
        });

        expect(omdbApi.search('star wars')).toEqual(movieData);
    })
});
