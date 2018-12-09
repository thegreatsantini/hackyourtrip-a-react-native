import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import  authenticateUser  from "./utils"

import AppNavigator from './config/routes';

export default class App extends React.Component {

  async componentWillMount() {

    const test = await authenticateUser()
    console.log(test)
  }

  render() {

    return (
      <AppNavigator />
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
