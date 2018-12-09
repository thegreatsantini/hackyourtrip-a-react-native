import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Picker,
} from 'react-native';

import CircleWithText from './components/CircleWithText';

import currencyCodesData from 'currency-codes/data';
import InputWithButton from './components/TextInputWithButton';

class Sandbox extends Component {
  state = {
    currencies: [],
    investCurrency: 'USD',
    localCurrency: 'USD',
    investAmount: '1000',
    countryAmount: '0'
  };

  componentWillMount() {
    this.getCurrencies();
  }

  getCurrencies = () => {
    let currency = [];
    currencyCodesData.map(country => {
      currency.push(country.code);
    });

    this.setState({ currencies: currency });
  };

  handleYourCurrencyChange = (text) => {
    this.setState({investAmount: text})
  }

  render() {
    return (
      <View style={styles.container}>

        <View>
          <InputWithButton
              buttonText={'USD'}
              keyboardType={'numeric'}
              onChangeText={this.handleYourCurrencyChange}
              value={this.state.investAmount}
          />
        </View>
        <View>
          <InputWithButton
              buttonText={'GBP'}
              editable={false}
              value={this.state.countryAmount}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: Expo.Constants.statusBarHeight,
  },
  bubbleContainer: {
    flexDirection: 'row',
  },
  bubble: {
    paddingHorizontal: 20,
  },
  pickerLeftContainer: {
    marginLeft: 55,
  },
  picker: {
    width: 50,
    height: 120,
    backgroundColor: '#FFF0E0',
    borderColor: 'red',
    borderBottomWidth: 2,
    flex: 90,
  },

  pickerItem: {
    height: 120,
    color: 'red',
  },

  arrowWrapper: {
    backgroundColor: '#FFF0E0',
    flex: 10,
    height: 40,
    marginLeft: -28,
    justifyContent: 'center',
  },

  arrow: {
    textAlign: 'center',
    color: 'red',
  },
});

export default Sandbox;
