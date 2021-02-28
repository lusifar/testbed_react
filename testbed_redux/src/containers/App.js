import { Provider } from 'react-redux';

import classes from './App.module.css';

import Welcome from './Welcome/Welcome';

import store from '../store';

function App() {
  return (
    <Provider store={store}>
      <div className={classes.App}>
        <Welcome />
      </div>
    </Provider>
  );
}

export default App;
