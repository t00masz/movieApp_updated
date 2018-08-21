import { createStore, applyMiddleware } from 'redux';
import userReducer from '../reducers/user-reducer';
import thunk from 'redux-thunk'

export default () => {
    const store = createStore(
        userReducer,
        applyMiddleware(thunk)
    );
    return store;
};