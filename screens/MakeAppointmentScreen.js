import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

class MakeAppointmentScreen extends Component {

    componentWillMount() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text>HERE YOU will see details about the current restuarant and their available appointments</Text>
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


export default MakeAppointmentScreen;