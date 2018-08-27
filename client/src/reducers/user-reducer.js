import * as types from '../actions/action-types';
import today from '../func/getDate'

const initialState = {
    name: '',
    lastName: '',
    email: '',
    date: today(),
    connectionError: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.CHANGE_USER_DATA:
            return { 
                ...state,
                [action.id]: action.update,
            }

        case types.SEND_USER_DATA_SUCCESS:
            return initialState

        case types.SEND_USER_DATA_FAIL:
            return {
                ...state,
                connectionError: action.connectionError
            }

        default: return state;
    }
}

export default userReducer