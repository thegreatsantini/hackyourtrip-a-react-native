import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { Content, H1, H2, H3 } from 'native-base';

import SmallCards from '../components/SmallCards';
import MediumCards from '../components/MediumCards'

class AppointmentListScreen extends Component {
  render() {
    return (
        <ScrollView>
      <View style={styles.container}>

        <H1>Appointments</H1>
        <ScrollView horizontal>
          <TouchableOpacity>
            <SmallCards />
          </TouchableOpacity>
          <SmallCards />
          <SmallCards />
        </ScrollView>

          <H1>Investmenst</H1>
          <ScrollView horizontal>
              <TouchableOpacity>
                  <MediumCards />
              </TouchableOpacity>
              <MediumCards />
              <MediumCards />
          </ScrollView>
      </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppointmentListScreen;
