/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

/**
 * @providesModule SharedAwesomeProject
 */

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
    Platform
} = ReactNative;



export default class SharedAwesomeProject extends Component {
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
          React Native shared code between iOS and Android
        </Text>
        <Text style={styles.instructions}>
          {Platform.OS} code is in index.{ Platform.OS }.js
        </Text>
        <Text style={styles.instructions}>
          { this.props.instructions }
        </Text>

        <Text style={styles.instructions}>
            Click count:  { this.state.counter }
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