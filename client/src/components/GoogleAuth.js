import React, { Component } from 'react';

export class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '1007311849508-24bpm5ke7f3iramnkiqtt4192jka44kv.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'streamy',
      });
    });
  }
  render() {
    return <div>GoogleAuth</div>;
  }
}

export default GoogleAuth;
