import * as types from './action-types';

const saveMovieToDatabase = (payload) => {
    return async dispatch => {
        try {
            const URL = "/movies";
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...payload.movieData
                }) 
            });
            if (response.status >= 200 && response.status < 300) {
                console.log(response, 'xx')
                dispatch ({ 
                    type: types.SAVE_MOVIE_TO_DATABASE_SUCCESS,
                    connectionStatus: response.statusText
                }) }
            else {
                dispatch ({
                    type: types.SAVE_MOVIE_TO_DATABASE_FAIL, 
                    connectionStatus: `Error! ${response.status} ${response.statusText}`
                }) }
        }
        catch (err) {
            dispatch ({
                type: types.SAVE_MOVIE_TO_DATABASE_FAIL, 
                connectionStatus: `Error! ${err.message}`
            })
        }
    }
}

export default saveMovieToDatabase;