import React, { Component } from 'react';
import { Paper } from '@material-ui/core';

export default class MyComponent extends Component {
  render() {
    return (
      <Paper style={{ 
        padding: 20,
        }}>
        스위치가 켜져 있습니다.
      </Paper>
    );
  }
}
