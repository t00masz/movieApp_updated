import * as types from '../actions/action-types';

const API = (payload) => {
    return async dispatch => {
        try {
            const URL = "/people";
            const response = await fetch(URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: payload.name,
                    lastName: payload.lastName,
                    email: payload.email,
                    date: payload.date,
                }) 
            });
            if (response.status >= 200 && response.status < 300) {
                dispatch ({ type: types.SEND_USER_DATA_SUCCESS }) }
            else {
                dispatch ({
                    type: types.SEND_USER_DATA_FAIL, 
                    dateError: `Error: ${response.status} ${response.statusText}`
                }) }
        }
        catch (err) {
            dispatch ({
                type: types.SEND_USER_DATA_FAIL, 
                dateError: "Error: " + err.message
            })
        }
    }
}

export default API