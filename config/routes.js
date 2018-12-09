import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
    createSwitchNavigator,
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation'

import FirstScreen from "../screens/FirstScreen";
import AppointmentListScreen from "../screens/AppointmentListScreen";
import InvestScreen from "../screens/InvestScreen";
import MoreScreen from "../screens/MoreScreen";
import RestaurantScreen from "../screens/RestaurantScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AuthLoadingScreen from "../screens/AuthloadingScreen";
import LoginScreen from "../screens/LoginScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";
import SettingsScreen from "../screens/SettingsScreen";
import CurrencyScreen from "../screens/CurrencyScreen";


const AuthStackNavigator = createStackNavigator({
    FirstScreen: {screen: FirstScreen},
    LoginScreen: {screen: LoginScreen},
    CreateAccountScreen: {screen: CreateAccountScreen}

})

const RestaurantStack = createStackNavigator({
    CheckinScreen: {screen: RestaurantScreen},
})

const AppointmentListStack = createStackNavigator({
    ClassList: {screen: AppointmentListScreen},

})

const InvestStack = createStackNavigator({
    StatsScreen: {screen: InvestScreen},
    // ProfileScreen: {},
})

const MoreStack = createStackNavigator({
    MoreScreen: {screen: MoreScreen}
})

const AppTabNavigator = createBottomTabNavigator({
    Restaurant: {screen: RestaurantStack},
    Appointments: {screen: AppointmentListStack},
    Invest: {screen: InvestStack},
    Profile: {screen: ProfileScreen},
    Currency: {screen: CurrencyScreen},
    More: {screen: MoreScreen}
})

const AppStackNavigator = createStackNavigator({
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: ({ navigation }) => ({
            title: 'FSA Hub',
            headerLeft: (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <View style={{ paddingHorizontal: 10 }}>
                        <Ionicons name="md-menu" size={32} />
                    </View>
                </TouchableOpacity>
            ),
        }),
    },

})

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppTabNavigator,
    Settings: { screen: SettingsScreen },
})

const AppNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
})

export default createAppContainer(AppNavigator)
