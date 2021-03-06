import WelcomeScreen from "../app/AppScreen/WelcomeScreen";
import Home from "../app/AppScreen/Home";
import CardListingScreen from './../app/AppScreen/CardListingScreen';
import ListingDetails from "../app/AppScreen/ListingDetails";

import { createStackNavigator } from '@react-navigation/stack';
import Feed from "../app/AppScreen/Feed";
import LoginScreen from './../app/AppScreen/LoginScreen';

const Stack = createStackNavigator();

export const StackNavigator = ()=> (
  <Stack.Navigator 
  screenOptions={{
      headerStyle: {backgroundColor: "#FFC9A5"},
      headerShown:false 
      
  }}
  
  >
    <Stack.Screen
    name="Welcome"
    component={WelcomeScreen}
    options={ {headerShown: false,
        tabBarStyle: { display: "none" } }}
    
    />
    {/* <Stack.Screen
    name="Login"
    component={LoginScreen}
    /> */}

<Stack.Screen
    name="Feed"
    component={Feed}
    />
    {/* <Stack.Screen
    name="Products"
    component={CardListingScreen}
    />
    <Stack.Screen
    name="ProductDetails"
    component={ListingDetails}
    /> */}
  </Stack.Navigator>
)