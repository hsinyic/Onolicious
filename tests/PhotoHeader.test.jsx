import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import PhotoHeader from '../client/src/components/PhotoHeader.jsx';

configure({ adapter: new Adapter() });

// it('renders correctly', () => {
//   const wrapper = shallow(<PhotoHeader />);
//   expect(wrapper).toMatchSnapshot();
// });

// describe('Reviews component', () => {
//   it('should render elements', () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });

// it('renders correctly when there are no items', () => {
//   const tree = renderer.create(<PhotoHeader />).toJSON();
//   expect(tree).toMatchSnapshot();
// });

// describe('Rendering of Calendar', () => {
//   it('should render without crashing', () => {
//     const wrapper = shallow(<PhotoHeader />);
//     const dates = wrapper.find('.calendar-day');
//     expect(wrapper.find('.calendar-table').length).toBe(1);
//     expect(dates.length).toBe(42);
//   });
// });