import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  AsyncStorage,
  StatusBar,
} from 'react-native';
import { Constants } from 'expo';
import { H1, H2, H3, Text, Button } from 'native-base';

class Sandbox extends Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.imageBackground}>
        <ImageBackground
          source={{
            url:
              'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          }}
          style={styles.imageBackground}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoBackground}>
              <Image
                style={styles.logo}
                source={require('./assets/splash.png')}
                alt=""
              />
            </View>
          </View>
          <View style={styles.joinContainer}>
            <View style={styles.joinText} />

            <View style={styles.joinTextSub}>{/*<Text>Test</Text>>*/}</View>
          </View>

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button primary>
                <Text> Primary </Text>
              </Button>
            </View>

            <View style={styles.button}>
              <Button primary>
                <Text> Primary </Text>
              </Button>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  logoContainer: {
    position: 'absolute',
    top: 20,
    right: 225,
  },

  logoBackground: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 130,
    height: 120,
  },

  logo: {
    width: 100,
    height: 100,
  },

  joinContainer: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },

  joinText: {
    justifyContent: 'center',
    alignItems: 'center',
    // paddingTop: 250
  },

  joinTextSub: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    // marginTop: 25,
    paddingHorizontal: 35,
  },

  button: {
    paddingTop: 20,
  },

  buttonText: {
    textAlign: 'center',
  },

  bottomDivider: {
    backgroundColor: '#fff',
    width: 3,
    height: '100%',
    marginRight: 10,
  },
});

export default Sandbox;
