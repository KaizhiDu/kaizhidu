import './styles.scss';
import Prologue from './Prologue';
import React, { Component } from 'react';
import background from '../img/background.jpeg';

class App extends Component {
  componentDidMount() {
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundImage = `linear-gradient(rgba(16, 16, 16, 0.8),
  rgba(16, 16, 16, 0.8)),url(${background})`;
    document.getElementsByTagName(
      'body'
      // eslint-disable-next-line max-len
    )[0].style.backgroundSize = 'cover';
  }

  render() {
    return (
      <div>
        <Prologue />
      </div>
    );
  }
}

export default App;
