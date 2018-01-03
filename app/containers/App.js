// @flow
import React, { Component } from 'react';
import type { Children } from 'react';

import TitleBar from '../components/TitleBar';

export default class App extends Component {
  props: {
    children: Children,
  };

  render() {
    return (
      <div>
        <TitleBar />
        {this.props.children}
      </div>
    );
  }
}
