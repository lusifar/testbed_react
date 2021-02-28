import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom';

const Post = (props) => {
  useEffect(() => {
    console.log(props);
  });

  return (
    <React.Fragment>
      <h1>Post {props.match.params.id}</h1>
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Post);
