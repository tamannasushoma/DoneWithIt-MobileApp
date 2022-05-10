import WelcomeScreen from "../app/AppScreen/WelcomeScreen";
import Home from "../app/AppScreen/Home";
import CardListingScreen from './../app/AppScreen/CardListingScreen';
import ListingDetails from "../app/AppScreen/ListingDetails";

import { createStackNavigator } from '@react-navigation/stack';
import Feed from "../app/AppScreen/Feed";

const Stack = createStackNavigator();

export const HomeStack = ()=> (
  <Stack.Navigator 
  screenOptions={{
      headerStyle: {backgroundColor: "#FFC9A5"},
        
    // headerShown:false 
  }}
  
  >
    <Stack.Screen
    name="Home"
    component={Home}
    />
    <Stack.Screen
    name="Products"
    component={CardListingScreen}
    />
    <Stack.Screen
    name="ProductDetails"
    component={ListingDetails}
    />
  </Stack.Navigator>
)