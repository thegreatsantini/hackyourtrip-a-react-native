import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker, Icon, Item, Input, Form } from "native-base";
import currencyCodesData from "currency-codes/data";

class CurrencyScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHome: "USD",
      selectedLocal: "USD"
    };
  }
  onValueChangeHome(value) {
    this.setState({
      selectedHome: value
    });
  }
  onValueChangeLocal(value) {
    this.setState({
      selectedLocal: value
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Form>
          <Text>Home Currency: </Text>
          <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                headerBackButtonText="Back"
                selectedValue={this.state.selectedHome}
                onValueChange={this.onValueChangeHome.bind(this)}
              >
            {PopulateCountryDropdown()}
          </Picker>
          <Text>Local Currency: </Text>
          <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down" />}
                headerBackButtonText="Back"
                selectedValue={this.state.selectedLocal}
                onValueChange={this.onValueChangeLocal.bind(this)}
              >
            {PopulateCountryDropdown()}
          </Picker>
        </Form>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

function PopulateCountryDropdown() {
  let countryCodes = [];
  currencyCodesData.forEach(function(item) {
    countryCodes.push(item.code);
  });
  return countryCodes.map((countryCode, i) => (
    <Picker.Item
      key={i}
      label={countryCode.toString()}
      value={countryCode.toString()}
    />
  ));
}

export default CurrencyScreen;
