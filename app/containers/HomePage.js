// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

import { isUserEitherLoggedIn } from '../utils/helpers';

class HomePage extends Component {
  render() {
    return <Home />;
  }
}

export function mapStateToProps(state) {
  return {
    isEitherLoggedIn: isUserEitherLoggedIn(state.auth),
  };
}

export default connect(mapStateToProps)(HomePage);
