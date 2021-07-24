import React, { Suspense } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import classes from './Layout.module.css';

import Welcome from './Welcome/Welcome';
import Users from './Users/Users';

// for lazy loading the Posts component
const Posts = React.lazy(() => {
  return import('./Posts/Posts');
});

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <nav>
        <NavLink
          to={{
            pathname: '/users',
            search: 'userId=12345',
            hash: 'test1234',
          }}
          className={classes.NavLink}
          activeClassName={classes.NavLinkActive}
        >
          Users
        </NavLink>
        <NavLink to="/posts" className={classes.NavLink} activeClassName={classes.NavLinkActive}>
          Posts
        </NavLink>
      </nav>
      <hr />
      <Switch>
        <Route path="/" exact>
          <Welcome />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route
          path="/posts"
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <Posts />
            </Suspense>
          )}
        />
        <Route render={() => <h1>No Found</h1>} />
      </Switch>
    </div>
  );
};

export default Layout;
