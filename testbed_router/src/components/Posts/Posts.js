import React, { useEffect } from 'react';

import { Route, withRouter } from 'react-router-dom';

import Post from './Post/Post';

const Posts = (props) => {
  useEffect(() => {
    console.log(props);
  });

  const inputChangedHandler = (event) => {
    props.history.push(`${props.match.url}/${event.target.value}`);
  };

  return (
    <React.Fragment>
      <h1>Posts Page</h1>
      <hr />
      <input onChange={inputChangedHandler} />
      <Route path={props.match.url + '/:id'} component={Post} />
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Posts);
