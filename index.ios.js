/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';



import React, { Component } from 'react';
import Button from 'react-native-button';

import {
  AppRegistry,
  StyleSheet,
  Text,
} from 'react-native';

const ReactNative = require('react-native');
const {
    Alert,
    View,
    //Button,
} = ReactNative;


export default class AwesomeProject extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        this.state.counter = 1;
        
    }
    
    onButtonPress = ( sender ) => {
        this.setState( { counter: (++this.state.counter) });
    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
            Count:  { this.state.counter }
        </Text>
            <Button
            onPress={ this.onButtonPress }
            title="Learn More"
            color="blue"
            containerStyle={{padding:10, overflow:'hidden', borderRadius:4, backgroundColor: 'black'}}
            backgroundColor="grey"
            accessibilityLabel="Learn more about this purple button">
            Learn More
            </Button>
            
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
