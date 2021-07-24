import React, { useEffect } from 'react';

import { useRouteMatch } from 'react-router-dom';

const Post = (props) => {
  // react-router
  const match = useRouteMatch();

  // react
  useEffect(() => {
    console.log(match);
  });

  return (
    <React.Fragment>
      <h1>Post {match.params.id}</h1>
      {props.children}
    </React.Fragment>
  );
};

export default React.memo(Post);
