import { BrowserRouter } from 'react-router-dom';

import classes from './App.module.css';

import Layout from '../components/Layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
