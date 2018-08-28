import userReducer from '../../reducers/user-reducer';
import moment from 'moment'

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
    const state = userReducer({type: "CHANGE_USER_DATA", id: "name", update: "Tomasz"})
    console.log(state)
    //expect(state.name).toBe('Tomasz')
});

test ('should change state to initial', () => {
    const state = userReducer(currentState, { type: 'SEND_USER_DATA_SUCCESS' })
    expect(state).toEqual((initialState))
});

// test ('should show connection error', () => {
//     const state = userReducer(currentState.connectionError, { type:'SEND_USER_DATA_FAIL' })
//     expect(state.connectionError).toBe('404')
// });
