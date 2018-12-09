import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import RestaurantCard from '../components/RestaurantCard'
// Contexts
import AppStateContext from '../contexts'

const hardCoded = [
    {
        name: "Joe's crabshack", 
        address: "133 new haven", 
        city: 'toronto', 
        mcc: 'steakhouse', 
        website: 'google.com'
    }
]

class RestaurantScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurants: [],
            isLoading: true
        }
    }
    renderRestaurants = async (token) => {
        return ['sushi', 'BBQ', 'SteakHouse']
    }
    render() {
        return (
            // <AppStateContext.Consumer>
            //     {
            //         (value) => {
            //             return (
            //                 <View style={styles.container}>
            //                     <Text>Restaurant List Screen {value}</Text>
            //                 </View>
            //             )
            //         }
            //     }
            // </AppStateContext.Consumer>
            <View style={styles.container}>
                <RestaurantCard restaurants={hardCoded}  />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 2
    },
});

export default RestaurantScreen;
