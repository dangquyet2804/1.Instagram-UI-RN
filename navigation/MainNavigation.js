import React from 'react';
import { Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import LoginScreen from '../screens/LoginScreen.js';
import HomeScreen from '../screens/HomeScreen.js'
import SearchScreen from '../screens/SearchScreen.js'
import LikeScreen from '../screens/LikeScreen.js'
import ProfileScreen from '../screens/ProfileScreen.js'

const BodyNavigator = createBottomTabNavigator({
    Home: HomeScreen,
    Search: SearchScreen,
    Like: LikeScreen,
    ProFile: ProfileScreen
},{
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    showLabel: false,
    showIcon: true
  }
});

const MainNavigation = createSwitchNavigator({
    // Login: LoginScreen,
    Body: BodyNavigator
})
export default createAppContainer(MainNavigation);