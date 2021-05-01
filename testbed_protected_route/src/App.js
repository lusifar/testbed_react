import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import classes from "./App.module.scss";

import Public from "./components/Public/Public";
import Login from "./components/Login/Login";
import Protected from "./components/Protected/Protected";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthButton from "./components/AuthButton/AuthButton";

function App() {
  return (
    <div className={classes.App}>
      <Router>
        <div>
          <AuthButton />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>

          <Route path="/public">
            <Public />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <ProtectedRoute path="/protected">
            <Protected />
          </ProtectedRoute>
        </div>
      </Router>
    </div>
  );
}

export default App;
