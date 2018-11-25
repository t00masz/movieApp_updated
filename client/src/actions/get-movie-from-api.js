import * as types from './action-types';

const getMovieFromApi = (payload) => {
    return async dispatch => {
        try {
            const URL = `https://www.omdbapi.com/?t=${payload.movieTitle}&apikey=c81aa435`;
            const response = await fetch(URL)
            const jsonResponse = await response.json();
            if (jsonResponse.Poster === "N/A") { jsonResponse.Poster = "/posterNotAvailable.jpg" };
            if (response.status >= 200 && response.status < 300) {
                dispatch ({ 
                    type: types.GET_MOVIE_FROM_API_SUCCESS,
                    movieData: jsonResponse
                }) }
            else {
                dispatch ({
                    type: types.GET_MOVIE_FROM_API_FAIL, 
                    connectionStatus: `Error! ${response.status} ${response.statusText}`
                }) };
        }
        catch (err) {
            dispatch ({
                type: types.GET_MOVIE_FROM_API_FAIL, 
                connectionStatus: `Error! ${err.message}`
            })
        }
    }
}

export default getMovieFromApi;