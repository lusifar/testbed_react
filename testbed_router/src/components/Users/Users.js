import React, { useEffect } from 'react';

import { withRouter } from 'react-router-dom';

const Users = (props) => {
  useEffect(() => {
    console.log(props);
  });

  return (
    <React.Fragment>
      <h1>Users Page</h1>
      {props.children}
    </React.Fragment>
  );
};

export default withRouter(Users);
