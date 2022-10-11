import React, { Component } from 'react';

export class GoogleAuth extends Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '1007311849508-24bpm5ke7f3iramnkiqtt4192jka44kv.apps.googleusercontent.com',
          scope: 'email',
          plugin_name: 'streamy',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
        <button className='ui red google button' onClick={this.onSignOut}>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='ui green google button' onClick={this.onSignIn}>
          <i className='google icon' />
          Sign In with Google
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
