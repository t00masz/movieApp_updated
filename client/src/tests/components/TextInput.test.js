import React from 'react';
import { shallow } from 'enzyme'
import TextInput from '../../components/SubmitInput';
import user from '../fixtures/user';

test('should render text input', () => {
    const wrapper = shallow(<TextInput 
        name="name" 
        placeholder="Your first name (required)" 
        type="text"
        pattern="([a-zA-Z]){2,30}"
        value={user.name} />);
    expect(wrapper).toMatchSnapshot();
});
