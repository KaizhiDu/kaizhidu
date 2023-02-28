import React from 'react';

import './Banner01transparent.css';

const Banner01 = props => (
  <div className="banner">
    <h1>{props.title}</h1>
    <div />
    <p>{props.subtitle}</p>
    {props.children}
  </div>
);

export default Banner01;
