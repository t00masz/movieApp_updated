import React from 'react';
import { shallow } from 'enzyme'
import Label from '../../components/Label';

test('should render label', () => {
    const wrapper = shallow(<Label 
        name="errorLabel" 
        value="Testing label" />);
    expect(wrapper).toMatchSnapshot();
});
