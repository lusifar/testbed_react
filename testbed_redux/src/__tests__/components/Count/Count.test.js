import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Count } from '../../../components/Count/Count';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<Count>', () => {
  let wrapper = null;

  const fakeState = {
    result: [],
  };

  const fakeProps = {
    number: 10,
    addResultHandler: (number) => fakeState.result.push(number),
  };

  beforeEach(() => {
    wrapper = shallow(<Count {...fakeProps} />);
  });

  it('test the rendering result', () => {
    expect(wrapper.find('h1').text()).toEqual('Current Count: 10');
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it('test the button behavior', () => {
    wrapper.find('button').simulate('click');
    expect(fakeState.result).toEqual([10]);
  });
});
