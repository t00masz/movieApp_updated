import changeUserData from '../../actions/user-actions';

const id = 'name';
const update = 'xxx'

test('should start change data action', () => {
    const action = changeUserData(id,update);
    expect(action).toEqual({
        type: 'CHANGE_USER_DATA',
        id: id,
        update: update
    })
})
