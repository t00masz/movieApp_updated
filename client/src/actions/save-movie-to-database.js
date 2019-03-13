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
                body: JSON.stringify(payload.movieData) 
            });
            if (response.status >= 200 && response.status < 300) {
                dispatch ({ 
                    type: types.SAVE_MOVIE_TO_DATABASE_SUCCESS,
                    connectionStatus: `The movie is successfully saved.`
                }) }
            if (response.status === 400) {
                dispatch ({
                    type: types.SAVE_MOVIE_TO_DATABASE_FAIL, 
                    connectionStatus: `Error! The movie is already saved.`
            }) }
            if (response.status === 422) {
                dispatch ({
                    type: types.SAVE_MOVIE_TO_DATABASE_FAIL, 
                    connectionStatus: `Error! Movie properties are incorrect.`
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