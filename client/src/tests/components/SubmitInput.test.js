import React from 'react';
import { shallow } from 'enzyme'
import SubmitInput from '../../components/SubmitInput';

test('should render submit input', () => {
    const wrapper = shallow(<SubmitInput title="Send data!" />);
    expect(wrapper).toMatchSnapshot();
});
