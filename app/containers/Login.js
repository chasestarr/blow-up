const { ipcRenderer } = require('electron');

import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { authGithub, isUserEitherLoggedIn } from '../utils/helpers';

export class LoginPage extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.isEitherLoggedIn) {
      ipcRenderer.send('reopen-window');
    }
  }

  render() {
    if (this.props.isEitherLoggedIn) {
      return <Redirect to="/asdf" />;
    }

    return (
      <div className="container-fluid main-container login">
        <button
          className="btn btn-block btn-login"
          onClick={() => authGithub(undefined, this.props.dispatch)}
        >
          Login to GitHub
        </button>
      </div>
    );
  }
}

export function mapStateToProps(state) {
  return {
    isEitherLoggedIn: isUserEitherLoggedIn(state.auth),
  };
}

export default connect(mapStateToProps)(LoginPage);
