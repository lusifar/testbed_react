import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Welcome } from '../../../containers/Welcome/Welcome';
import Count from '../../../components/Count/Count';
import Result from '../../../components/Result/Result';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<Welcome>', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<Welcome />);
  });

  it('test the rendering result', () => {
    expect(wrapper.find('button')).toHaveLength(4);
    expect(wrapper.find(Count).exists()).toBe(true);
    expect(wrapper.find(Result).exists()).toBe(true);
  });
});
