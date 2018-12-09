import React, { Component } from 'react';

import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Picker,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';

import AppointmentsDetailsScreen from './screens/AppointmentsDetailsScreen'

// import AppStateContext from '../contexts'

import axios from 'axios'



import currencyCodesData from 'currency-codes/data';
import InputWithButton from './components/TextInputWithButton';

class Sandbox extends Component {
  state = {
    currencies: [],
    investCurrency: 'USD',
    localCurrency: 'USD',
    investAmount: '1',
    countryAmount: '0',
    showMyCurrency: false,
    showLocalCurrency: false,
  };

  async componentWillMount() {



    // console.log(fetch)

    // this.getCurrencies();
  }

  getExchangeRate = async (amount) => {
    try {
      const response = await axios.get(`https://api.discover.com/dci/currencyconversion/v1/exchangerate`, {
        headers: {
          Accept: "application/json",
          Content_Type: "application/json",
          "X-DFS-API-PLAN": "DCI_CURRENCYCONVERSION_SANDBOX",
          Authorization: "Bearer 70493112-cc1c-43b4-b176-a353e8666751"


        },
        params: {
          currencycd: 'USD'
        }
      })

      return response.data.exchange_rate * amount

    }
    catch (e) {
      console.log(e)
    }
  }

  getCurrencies = () => {
    let currency = [];
    currencyCodesData.map(country => {
      currency.push(country.code);
    });

    this.setState({ currencies: currency });
  };

  handleYourCurrencyChange = (text) => {
    this.setState({investAmount: text })
  }

  handleMyCurrencyTypeChange = (value) => {
    this.setState({investCurrency: value, showMyCurrency: false })
  }
  handleLocalCurrencyTypeChange = (value) => {
    this.setState({localCurrency: value, showLocalCurrency: false })
  }

  render() {
    return (
        <AppointmentsDetailsScreen/>
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
  pickerContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 20,
    // alignItems: 'center',
    marginTop: 0,
  },
  picker: {
    width: 200,
    height: 44,
    backgroundColor: '#FFF0E0',
    borderColor: 'red',
    borderBottomWidth: 2,
    flex: 90
  },

  pickerItem: {
    height: 44,
    color: 'red'
  },

  arrowWrapper: {
    backgroundColor: '#FFF0E0',
    flex: 10,
    height: 40,
    marginLeft: -28,
    justifyContent: 'center'
  },

  arrow: {
    textAlign: 'center',
    color: 'red',
  }
});

export default Sandbox;
