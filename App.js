import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  authenticateUser  from "./utils"


import AppNavigator from './config/routes';

import { Provider } from './contexts';
import Sandbox from "./Sandbox";

export default class App extends React.Component {
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }
  render() {
    return (
      <Provider>
        <AppNavigator/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
