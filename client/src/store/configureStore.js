import { createStore, applyMiddleware } from 'redux';
import movieReducer from '../reducers/movie-reducer';
import thunk from 'redux-thunk'

export default () => {
    const store = createStore(
        movieReducer,
        applyMiddleware(thunk)
    );
    return store;
};