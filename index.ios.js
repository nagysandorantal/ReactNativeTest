import React, { Component } from 'react';
import ReactNative, { AppRegistry } from 'react-native';
import SharedAwesomeProject from 'SharedAwesomeProject';

class AwesomeProject extends Component {
  render() {
    return (
        <SharedAwesomeProject instructions= {"Press Cmd+R to reload,\n Cmd+D or shake for dev menu"}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
