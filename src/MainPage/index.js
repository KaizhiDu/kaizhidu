import './styles.scss';
import ReactTyped01 from './ReactTyped01';
import React, { useEffect, useState } from 'react';
import background from '../img/background.jpeg';
import Banner01 from './Banner01transparent';

const MainPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),
  rgba(16, 16, 16, 0.8)),url(${background})`;
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundSize = 'cover';

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

  return (
    <div
      style={{
        marginTop: windowSize.height / 2 - 100
      }}
    >
      <Banner01 title="Kaizhi Du" subtitle={<ReactTyped01 />} />
    </div>
  );
};

export default MainPage;
