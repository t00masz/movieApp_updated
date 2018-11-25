import * as types from './action-types';

const getMoviesFromDatabase = () => {
    return async dispatch => {
        try {
            const URL = "http://localhost:5000/allMovies";
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const responseJSON = await response.json();

            if (response.status >= 200 && response.status < 300) {
                dispatch ({ 
                    type: types.GET_MOVIES_FROM_DATABASE_SUCCESS,
                    moviesFromDatabase: responseJSON,
                    //connectionStatus: 'List of favourites is downoladed.'
                }) }
            else {
                dispatch ({
                    type: types.GET_MOVIES_FROM_DATABASE_FAIL, 
                    connectionStatus: `Error! ${response.status} ${response.statusText}`
                }) }
        }
        catch (err) {
            dispatch ({
                type: types.GET_MOVIES_FROM_DATABASE_FAIL, 
                connectionStatus: `Error! ${err.message}`
            })
        }
    }
}

export default getMoviesFromDatabase;