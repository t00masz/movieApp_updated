import * as types from './action-types';

const changeUserData = (id, update) => {
	return({
		type: types.CHANGE_USER_DATA, 
		id,
		update
	})
};

export default changeUserData