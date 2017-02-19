/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 
// index.ios.js
// index.android.js

import React, { AppRegistry } from 'react-native';
import AwesomeProject from './app';

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
*/

import React, { Component } from 'react';
import ReactNative, { AppRegistry } from 'react-native';
import SharedAwesomeProject from 'SharedAwesomeProject';

class AwesomeProject extends Component {
  render() {
    return (
        <SharedAwesomeProject instructions= {"Double tap R on your keyboard to reload,\n Shake or press menu button for dev menu"}/>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
