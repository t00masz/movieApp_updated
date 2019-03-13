import * as types from '../actions/action-types';
import moment from 'moment'

const initialState = {
    date: moment().format("YYYY-MM-DD"),
    connectionStatus: '',
    movieTitle: '',
    movieData: {
        Actors: '',
        Awards: '',
        BoxOffice: '',
        Country: '',
        Director: '',
        Genre: '',
        Metascore: '',
        Plot: '',
        Poster: '',
        Production: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Title: '',
        Website: '',
        Writer: '',
        Year: '',
        imdbRating: '',
        Error: ''
    },
    moviesFromDatabase: [],
    commentsFromDatabase: [],
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case types.CHANGE_MOVIE_DATA:
            return { 
                ...state,
                [action.id]: action.update,
            };

        case types.GET_MOVIE_FROM_API_SUCCESS:
            return {
                ...state,
                movieTitle: '',
                movieData: action.movieData
            };

        case types.GET_MOVIE_FROM_API_FAIL:
            return {
                ...state,
                connectionStatus: action.connectionStatus
            };

        case types.SAVE_MOVIE_TO_DATABASE_SUCCESS:
            return {
                ...state,
                movieData: { 
                    Title: '',
                },
                connectionStatus: action.connectionStatus
            };

        case types.SAVE_MOVIE_TO_DATABASE_FAIL:
            return {
                ...state,
                movieData: { 
                    Title: '',
                },
                connectionStatus: action.connectionStatus
            };

        case types.GET_MOVIES_FROM_DATABASE_SUCCESS:
            return {
                ...state,
                moviesFromDatabase: action.moviesFromDatabase,
                connectionStatus: action.connectionStatus
            };

        case types.GET_MOVIES_FROM_DATABASE_FAIL:
            return {
                ...state,
                connectionStatus: action.connectionStatus
            };
           
        
        case types.GET_COMMENTS_FROM_DATABASE_SUCCESS:
            return {
                ...state,
                commentsFromDatabase: action.commentsFromDatabase,
                connectionStatus: action.connectionStatus
            };

        case types.GET_COMMENTS_FROM_DATABASE_FAIL:
            return {
                ...state,
                connectionStatus: action.connectionStatus
            };

        default: return state;
    }
}

export default movieReducer;