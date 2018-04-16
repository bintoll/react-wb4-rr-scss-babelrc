import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Main from 'layouts/Main'

export default class AppNavigator extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Main} />
      </BrowserRouter>
    );
  }
}
