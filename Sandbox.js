import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import BaseCard from './components/BaseCard';
import SmallCards from './components/SmallCards';
import ProfileImage from './components/ProfileImage';

class Sandbox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Appointments</Text>
        <ScrollView horizontal>
          <TouchableOpacity>
            <SmallCards />
          </TouchableOpacity>
          <SmallCards />
          <SmallCards />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Expo.Constants.statusBarHeight,
  },
});

export default Sandbox;
