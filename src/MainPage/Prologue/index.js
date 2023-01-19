import './styles.scss';
import profile from '../../profile.jpeg';
import React, { Component, Fragment } from 'react';

class MainPage extends Component {
  render() {
    const text = 'I have nothing but diligent and integrity.';
    const textArray = text.split('');

    return (
      <Fragment>
        <table id="simple-board">
          <tbody>
            <tr id="row0">
              <td id="cell0-0">
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="slide-bar title">I'm Kaizhi Du.</p>
                <p className="slide-bar subtitle">A full stack engineer</p>
              </td>
              <td id="cell0-1">
                <img className="profile" src={profile} width={100} height={100}/>
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
  }
}

export default MainPage;
