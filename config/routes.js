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
import ClassListScreen from "../screens/ClassListScreen";
import StatsScreen from "../screens/StatsScreen";
import MoreScreen from "../screens/MoreScreen";
import CheckinScreen from "../screens/CheckinScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import AuthLoadingScreen from "../screens/AuthloadingScreen";
import LoginScreen from "../screens/LoginScreen";
import CreateAccountScreen from "../screens/CreateAccountScreen";


const AuthStackNavigator = createStackNavigator({
    FirstScreen: {screen: FirstScreen},
    LoginScreen: {screen: LoginScreen},
    CreateAccountScreen: {screen: CreateAccountScreen}

})

const CheckingStack = createStackNavigator({
    CheckinScreen: {screen: CheckinScreen},
})

const OnDemandStack = createStackNavigator({
    ClassList: {screen: ClassListScreen},

})

const ProfileStack = createStackNavigator({
    StatsScreen: {screen: StatsScreen},
    // ProfileScreen: {},
})

const MoreStack = createStackNavigator({
    MoreScreen: {screen: MoreScreen}
})

const AppTabNavigator = createBottomTabNavigator({
    Checking: {screen: CheckingStack},
    OnDemand: {screen: OnDemandStack},
    Stats: {screen: ProfileStack},
    Schedule: {screen: ScheduleScreen},
    More: {screen: MoreScreen}
})

const AppStackNavigator = createStackNavigator({
    AppTabNavigator : { screen: AppTabNavigator }
})

const AppDrawerNavigator = createDrawerNavigator({
    Home: AppTabNavigator,
})

const AppNavigator = createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStackNavigator,
    App: AppDrawerNavigator
})

export default createAppContainer(AppNavigator)
