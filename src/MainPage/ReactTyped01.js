import React from 'react';
import Typed from 'react-typed';

//https://github.com/ssbeefeater/react-typed#documentation
//https://mattboldt.github.io/typed.js/docs/
//advantages: loop,
const ReactTyped01 = () => (
  <React.Fragment>
    <Typed
      strings={[
        'Web Designer',
        'Full Stack Developer',
        'Project Manager',
        'Child Programming Teacher',
        'Adult Programming Teacher',
        'Stock Investor'
      ]}
      typeSpeed={50}
      backSpeed={35}
      backDelay={1000}
      loop
      smartBackspace
    />
  </React.Fragment>
);

export default ReactTyped01;
