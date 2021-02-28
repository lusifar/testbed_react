import React from 'react';

const welcome = (props) => {
  return (
    <React.Fragment>
      <h1>Welcome Page</h1>
      {props.children}
    </React.Fragment>
  );
};

export default welcome;
