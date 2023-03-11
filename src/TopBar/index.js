import React, { useState, useEffect } from 'react';
import './styles.scss';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
  const history = useHistory();

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
  }, []);

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  const width = windowSize.width;

  console.log(width);

  return (
    <div
      // style={{
      //   marginLeft: width / 2 + 100
      // }}
      className="topbar">
      <ul>
        <li key={0}>
          <div onClick={() => history.push('/')}>Home</div>
        </li>
        <li key={2}>
          <div onClick={() => history.push('/timeline')}>Timeline</div>
        </li>
        <li key={3}>
          <div onClick={() => history.push('/profile')}>Profile</div>
        </li>
        <li key={4}>
          <div onClick={() => history.push('/projects')}>Projects</div>
        </li>
      </ul>
    </div>

  );
};

export default Navbar;
