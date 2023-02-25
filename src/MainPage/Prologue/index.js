import './styles.scss';
import profile from '../../profile.jpeg';
import React, { Fragment } from 'react';
import { createBreakpoint } from 'react-use';

const MainPage = () => {
  const text = 'I have nothing but diligent and integrity.';
  const textArray = text.split('');

  const useBreakpoint = createBreakpoint({
    xl: 1563,
    lg: 1200,
    md: 900,
    sm: 600,
    xs: 0
  });
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'sm' || breakpoint === 'xs';
  return (
    <Fragment>
      <table id="simple-board">
        <tbody>
          <tr id="row0">
            <td id="cell0-0">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className={isMobile ? 'slide-bar title-mobile' : 'slide-bar title' }>I'm Kaizhi Du.</p>
              <p className={isMobile ? 'slide-bar subtitle-mobile' : 'slide-bar subtitle'}>A full stack engineer</p>
            </td>
            <td id="cell0-1">
              <img className="prologue-profile" src={profile} width={100} height={100}/>
            </td>
          </tr>
        </tbody>
      </table>

      <p className="landIn quote">{textArray.map((letter, idx) => <span key={idx} style={{
        animationDelay: `${idx * 0.05}s`
      }}>
        {letter}
      </span>)}</p>
    </Fragment>
  );
};

export default MainPage;
