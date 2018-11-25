import * as types from './action-types';

const getCommentsFromDatabase = () => {
    return async dispatch => {
        try {
            const URL = "http://localhost:5000/allComments";
            const response = await fetch(URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const responseJSON = await response.json();

            if (response.status >= 200 && response.status < 300) {
                dispatch ({ 
                    type: types.GET_COMMENTS_FROM_DATABASE_SUCCESS,
                    commentsFromDatabase: responseJSON,
                    //connectionStatus: 'List of comments is downoladed.'
                }) }
            else {
                dispatch ({
                    type: types.GET_COMMENTS_FROM_DATABASE_FAIL, 
                    connectionStatus: `Error! ${response.status} ${response.statusText}`
                }) }
        }
        catch (err) {
            dispatch ({
                type: types.GET_COMMENTS_FROM_DATABASE_FAIL, 
                connectionStatus: `Error! ${err.message}`
            })
        }
    }
}

export default getCommentsFromDatabase;