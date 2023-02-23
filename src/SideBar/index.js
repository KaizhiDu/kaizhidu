import './styles.css';

import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  state = {
    checked: false
  }

  render() {
    const { checked } = this.state;

    return (
      <Fragment>
        <div className={`wrapper ${checked ? 'topper' : ''}`}>
          <input
            type="checkbox"
            id="menuToggler"
            className="input-toggler"
            checked={checked}
            onClick={() => this.setState({ checked: !checked })}
          />
          <label
            htmlFor="menuToggler"
            className="menu-toggler"
          >
            <span className="menu-toggler__line"></span>
            <span className="menu-toggler__line"></span>
            <span className="menu-toggler__line"></span>
          </label>
          <aside className="sidebar">
            <ul className="menu">
              <li className="menu__item">
                <Link to="/">
                  <a
                    onClick={() => this.setState({ checked: false })}
                    className="menu__link">
                    Home
                  </a>
                </Link>

              </li>
              <Link to="/timeline">
                <li className="menu__item">
                  <a
                    onClick={() => this.setState({ checked: false })}
                    className="menu__link">
                    Timeline
                  </a>
                </li>
              </Link>
              <Link to="/profile">
                <li className="menu__item">
                  <a
                    onClick={() => this.setState({ checked: false })}
                    className="menu__link">
                    Profile
                  </a>
                </li>
              </Link>

              <li className="menu__item"><div className="menu__link">Portfolio</div></li>
              <li className="menu__item"><div className="menu__link">About</div></li>
              <li className="menu__item"><div className="menu__link">Contact</div></li>
            </ul>
          </aside>
        </div>

      </Fragment>
    );
  }
}

export default SideBar;
