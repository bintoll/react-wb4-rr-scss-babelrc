import React, { Component } from 'react';

import AppNavigator from 'api/AppNavigator'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <AppNavigator />
    );
  }
}