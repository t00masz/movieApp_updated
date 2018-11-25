import * as types from './action-types';

const changeMovieData = (id, update) => {
	return({
		type: types.CHANGE_MOVIE_DATA, 
		id,
		update
	})
};

export default changeMovieData