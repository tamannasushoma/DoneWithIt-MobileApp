import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import CardListingScreen from './app/AppScreen/CardListingScreen';
import ListingDetails from './app/AppScreen/ListingDetails';
import WelcomeScreen from './app/AppScreen/WelcomeScreen';

export default function App() {
  return (
  //  <WelcomeScreen/>
  // <CardListingScreen/>
  <ListingDetails/>
  );
}
