import React, { useEffect } from 'react';

import { useRouteMatch } from 'react-router-dom';

const Users = (props) => {
  // react-router
  const match = useRouteMatch();

  // react
  useEffect(() => {
    console.log(match);
  });

  return (
    <React.Fragment>
      <h1>Users Page</h1>
      {props.children}
    </React.Fragment>
  );
};

export default React.memo(Users);
