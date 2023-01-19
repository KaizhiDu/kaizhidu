import './styles.css';

import React, { Component, Fragment } from 'react';
import MainPage from '../MainPage';
import MyTimeline from '../MyTimeline';

class SideBar extends Component {
  state = {
    page: 'mainPage'
  }

  render() {
    const { page } = this.state;

    return (
      <Fragment>
        <div className="wrapper">
          <input type="checkbox" id="menuToggler" className="input-toggler"/>
          <label htmlFor="menuToggler" className="menu-toggler">
            <span className="menu-toggler__line"></span>
            <span className="menu-toggler__line"></span>
            <span className="menu-toggler__line"></span>
          </label>
          <aside className="sidebar">
            <ul className="menu">
              <li className="menu__item">
                <div
                  onClick={() => this.setState({ page: 'mainPage' })}
                  className="menu__link">
                  Home
                </div>
              </li>
              <li className="menu__item">
                <div
                  onClick={() => this.setState({ page: 'myTimeline' })}
                  className="menu__link">
                  Blog
                </div>
              </li>
              <li className="menu__item"><div className="menu__link">Portfolio</div></li>
              <li className="menu__item"><div className="menu__link">About</div></li>
              <li className="menu__item"><div className="menu__link">Contact</div></li>
            </ul>
          </aside>

          <main className={`content ${page}`}>
            {page === 'mainPage' && <MainPage />}
            {page === 'myTimeline' && <MyTimeline />}
          </main>

        </div>

      </Fragment>
    );
  }
}

export default SideBar;
