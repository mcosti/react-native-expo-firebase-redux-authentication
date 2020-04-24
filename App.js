import React, { Component } from 'react';
import Routes from './app/components/routes';
import { registerRootComponent } from 'expo';


class App extends Component {
  render() {
    return <Routes />;
  }
}

export default registerRootComponent(App);
