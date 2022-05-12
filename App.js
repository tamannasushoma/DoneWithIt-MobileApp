import {React, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, Alert, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
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

  const [imageUri, setimageUri] = useState();
  const permissionImagePicker = async ()=>{
    // const result = await Permissions.askAsync(Permissions.CAMERA, Permissions.LOCATION_BACKGROUND);
    const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync;

    // if(!granted) alert("give permission to access media library?")
  }

 
    const handleSelectImage= async ()=>{
        const result = await ImagePicker.launchImageLibraryAsync();

        if(!result.cancelled) setimageUri(result.uri)
    
    
  } 


  useEffect(()=>{
    permissionImagePicker();
  },[])

  return (

    <SafeAreaView style={styles.container}>
          <Button title='Select image' onPress={handleSelectImage}/>
          <Image style={styles.imageStyle} source={{ uri : imageUri}}/>
    </SafeAreaView>


  //  <WelcomeScreen/>
  // <CardListingScreen/>
  // <ListingDetails/>
  // <Home/>
  // <Navigator/>
  // <NavigationContainer>
    // <StackNavigator/>
    //  <TabNavigator/> //no needed
  // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: 150
  },
  imageStyle:{
    height: 150,
    width:150,
    marginTop: 50,
    marginLeft: 100
    
    
  }
})
