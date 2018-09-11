import React from 'react';
import { shallow } from 'enzyme'
import DateInput from '../../components/Label';
import user from '../fixtures/user';

test('should render date input', () => {
    const wrapper = shallow(<DateInput 
        name="date"
        value={user.date}/>);
    expect(wrapper).toMatchSnapshot();
});
