import React, {Component} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import AppointmentListScreen from "./AppointmentListScreen"

class InvestScreen extends Component
{
    render()
    {
        return (
          <View style={styles.container}>
            <Text>Invest Screen</Text>
            <AppointmentListScreen />

          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default InvestScreen;