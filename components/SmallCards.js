import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Content, H1, H2, H3 } from 'native-base';

import ProfileImage from '../components/ProfileImage';

class SmallCards extends Component {

  render() {
    const {profileImage, title, subTitle, date} = this.props
    return (
      <Content padder>
        <View style={styles.container}>
          <View style={styles.profileImageContainer}>
            <ProfileImage
              source={profileImage}
              size={100}
            />
          </View>
          <View style={styles.titleContainer}>
            <H3>{title}</H3>
          </View>
          <View style={styles.subTextContainer}>
            <Text>{subTitle}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text>{date}</Text>
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
      textAlign: 'center'
    },
    subTextContainer: {
      paddingBottom: 5,
    },
    dateContainer:{
      paddingVertical: 10,
    }
});

export default SmallCards;















