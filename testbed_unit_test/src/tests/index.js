import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { itemReducer } from '../store/reducers';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test Page', route);

  return render(ui, { wrapper: BrowserRouter });
};

const renderWithRedux = (ui, { initState }) => {
  return render(<Provider store={createStore(itemReducer, initState)}>{ui}</Provider>);
};

const renderWithRouterRedux = (ui, { initState, route = '/' } = {}) => {
  window.history.pushState({}, 'Test Page', route);

  return render(<Provider store={createStore(itemReducer, initState)}>{ui}</Provider>, { wrapper: BrowserRouter });
};

export { renderWithRouter, renderWithRedux, renderWithRouterRedux };
