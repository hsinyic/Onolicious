import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SaveRestaurant from '../client/src/components/SaveRestaurant.jsx';

configure({ adapter: new Adapter() });

it('renders correctly', () => {
  const wrapper = shallow(<SaveRestaurant />);
  expect(wrapper).toMatchSnapshot();
});