import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Provider } from 'react-redux';
import App from '../../containers/App';
import Welcome from '../../containers/Welcome/Welcome';

Enzyme.configure({
  adapter: new Adapter(),
});

describe('<App>', () => {
  let wrapper = null;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('test the rendering result', () => {
    expect(wrapper.find(Provider).exists()).toBe(true);
    expect(wrapper.find(Welcome).exists()).toBe(true);
  });
});
