import moment from 'moment'

import userReducer from '../../reducers/user-reducer';
import * as types from '../../actions/action-types';

const initialState = {
    name: '',
    lastName: '',
    email: '',
    date: moment().format("YYYY-MM-DD"),
    connectionError: '',
};

const currentState = {
    name: 'Tomasz',
    lastName: 'Ratman',
    email: 'tomek.ratman@interia.pl',
    date: moment().add(2, 'day').format("YYYY-MM-DD"),
    connectionError: '404',
};

test ('should init reducer', () => {
    const state = userReducer(undefined, { type: '@@INIT' } );
    expect(state).toEqual(initialState)
});

test ('should change user data', () => {
    const state = userReducer(currentState, { type: types.CHANGE_USER_DATA, id: "name", update: currentState.name })
    expect(state.name).toBe(currentState.name)
});

test ('should change state to initial', () => {
    const state = userReducer(currentState, { type: types.SEND_USER_DATA_SUCCESS })
    expect(state).toEqual((initialState))
});

test ('should show connection error', () => {
    const state = userReducer(currentState, { type: types.SEND_USER_DATA_FAIL, connectionError: currentState.connectionError })
    expect(state.connectionError).toBe(currentState.connectionError)
});
