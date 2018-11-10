import React, { Component } from 'react';
import { CssBaseline, Paper, Typography } from '@material-ui/core';
import MyComponent from '../../componets/MyComponent/MyComponent';
import TopAppBar from '../TopAppBar/TopAppBar';
import logo from './logo.svg';
import './global.css';


class App extends Component {
  state = {
    mySwitch: false,
  }

  clickHandler = () => {
    if (this.state.mySwitch) {
      this.setState({
        mySwitch: false,
      });
    } else {
      this.setState({
        mySwitch: true,
      });
    }
  }

  render() {
    let btn;
    const { mySwitch } = this.state;

    if (mySwitch) {
      btn = <MyComponent style={{ display: 'block' }} />;
    }
    return (
      <>
        <CssBaseline />
        <TopAppBar
          clickHandler={this.clickHandler}
        />
        <div className="App">
        { btn }
        </div>
      </>
    );
  }
}

export default App;
