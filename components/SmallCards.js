import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Content, H1, H2, H3 } from 'native-base';

import ProfileImage from '../components/ProfileImage';

class SmallCards extends Component {
  render() {
    return (
      <Content padder>
        <View style={styles.container}>
          <View style={styles.profileImageContainer}>
            <ProfileImage
              source={
                'https://www.arabiaweddings.com/sites/default/files/styles/400x400/public/companies/images/2017/01/pretty_lady_salon.jpg?itok=SO3sJT37'
              }
              size={100}
            />
          </View>
          <View style={styles.titleContainer}>
            <H3>SmallCards</H3>
          </View>
          <View style={styles.subTextContainer}>
            <Text>Small Text</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text>12/8/18 5:00 pm</Text>
          </View>
        </View>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 175,
    height: 250,
    backgroundColor: '#EEEEF4',
    borderRadius: 15,
    paddingHorizontal: 25,
  },
  profileImageContainer: {
    paddingVertical: 25,
  },
    titleContainer: {
      paddingBottom: 3,
    },
    subTextContainer: {
      paddingBottom: 5,
    },
    dateContainer:{
      paddingVertical: 10,
    }
});

export default SmallCards;















