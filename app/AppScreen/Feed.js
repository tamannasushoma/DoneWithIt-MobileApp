import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import About from './About';
import Home from './Home';
import Account from './Account';
import { HomeStack } from '../../routes/homeStack';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Tab = createBottomTabNavigator();

const TabNavigator = ()=>(
  <Tab.Navigator

  screenOptions={{
    headerShown:false,
    
}}
  >
    <Tab.Screen 
    name='Main' 
    component={HomeStack}
    options={{
        tabBarIcon:()=>{
            return (
                <Ionicons name="md-home" size={24} color="#74BDCB" />
            )
        }
    }}
    />
   
    <Tab.Screen 
    name='Chat' 
    component={About}
    options={{
        tabBarIcon:()=>{
            return (
                <Ionicons name="chatbubbles-sharp" size={25} color="#74BDCB" />
            )
        }
    }}
    />
    <Tab.Screen 
    name='Account' 
    component={Account}
    options={{
        tabBarIcon:()=>{
            return (
                <Ionicons name="person-circle-sharp" size={25} color="#74BDCB" />

            )
        }
    }}
    />
     <Tab.Screen 
    name='About' 
    component={About}
    options={{
        tabBarIcon:()=>{
            return (
                <Ionicons name="information-circle-sharp" size={24} color="#74BDCB" />
            )
        }
    }}
    />

  </Tab.Navigator>
)

function Feed(props) {
    return (
        <TabNavigator/>
    );
}

export default Feed;