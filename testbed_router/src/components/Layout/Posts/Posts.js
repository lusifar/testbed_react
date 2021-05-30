import React, { useEffect } from 'react';

import { Route, useRouteMatch, useHistory } from 'react-router-dom';

import Post from './Post/Post';

const Posts = (props) => {
  // react-router
  const match = useRouteMatch();
  const history = useHistory();

  // react
  useEffect(() => {
    console.log(match);
  });

  // the component handler
  const inputChangedHandler = (event) => {
    history.push(`${match.url}/${event.target.value}`);
  };

  return (
    <React.Fragment>
      <h1>Posts Page</h1>
      <hr />
      <input onChange={inputChangedHandler} />
      <Route path={match.url + '/:id'} component={Post} />
      {props.children}
    </React.Fragment>
  );
};

export default React.memo(Posts);
