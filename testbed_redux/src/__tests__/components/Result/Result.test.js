import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Result } from '../../../components/Result/Result';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<Result>', () => {
  let wrapper = null;

  const fakeState = {
    result: [1, 2, 3, 4, 5],
  };

  const fakeProps = {
    items: [1, 2, 3, 4, 5],
    removeResultHandler: (index) => fakeState.result.splice(index, 1),
  };

  beforeEach(() => {
    wrapper = shallow(<Result {...fakeProps} />);
  });

  it('test the rendering result', () => {
    expect(wrapper.find('li')).toHaveLength(5);
  });

  it('test the li behavior', () => {
    wrapper.find('li').first().simulate('click');
    expect(fakeState.result).toEqual([2, 3, 4, 5]);
  });
});
