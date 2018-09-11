import changeUserData from '../../actions/user-actions';
import * as types from '../../actions/action-types';

const id = 'name';
const update = 'xxx'

test('should start change data action', () => {
    const action = changeUserData(id, update);
    expect(action).toEqual({
        type: types.CHANGE_USER_DATA,
        id: id,
        update: update
    })
});