import { Link, Route, Switch } from 'react-router-dom';

import Home from './components/Home/Home';
import Users from './components/Users/Users';
import List from './components/List/List';
import NoMatch from './components/NoMatch/NoMatch';

import LocationDisplay from './components/LocationDisplay/LocationDisplay';

import './App.css';

function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/list">List</Link>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/list">
          <List />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>

      <LocationDisplay />
    </div>
  );
}

export default App;
