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
import Button from 'react-native-button';

import {
  AppRegistry,
  StyleSheet,
    Alert,
  Text,
  View
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
            
            <Button
            onPress={onButtonPress}
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

const onButtonPress = () => {
    Alert.alert('Button has been pressed!');
};


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


