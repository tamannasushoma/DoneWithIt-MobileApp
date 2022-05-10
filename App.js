import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import CardListingScreen from './app/AppScreen/CardListingScreen';
import Home from './app/AppScreen/Home';
import ListingDetails from './app/AppScreen/ListingDetails';
import WelcomeScreen from './app/AppScreen/WelcomeScreen';
import Navigator, { StackNavigator } from './routes/welcomeStack'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import About from './app/AppScreen/About';

// const Tab = createBottomTabNavigator();

// const TabNavigator = ()=>(
//   <Tab.Navigator
//   screenOptions={{
//     headerShown:false
    
// }}
//   >
//     <Tab.Screen name='home' component={StackNavigator}/>
//     <Tab.Screen name='About' component={About}/>
//   </Tab.Navigator>
// )

export default function App() {
  return (
  //  <WelcomeScreen/>
  // <CardListingScreen/>
  // <ListingDetails/>
  // <Home/>
  // <Navigator/>
  <NavigationContainer>
    <StackNavigator/>
    {/* <TabNavigator/> */}
  </NavigationContainer>
  );
}
