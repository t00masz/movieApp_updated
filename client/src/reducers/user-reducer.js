import * as types from '../actions/action-types';
import moment from 'moment'

const initialState = {
    name: '',
    lastName: '',
    email: '',
    date: moment().format("YYYY-MM-DD"),
    connectionError: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.CHANGE_USER_DATA:
            return { 
                ...state,
                [action.id]: action.update,
            };

        case types.SEND_USER_DATA_SUCCESS:
            return initialState;

        case types.SEND_USER_DATA_FAIL:
            return {
                ...state,
                connectionError: action.connectionError
            };

        default: return state;
    }
}

export default userReducer