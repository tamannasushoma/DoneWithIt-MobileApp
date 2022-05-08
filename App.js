import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import CardListingScreen from './app/AppScreen/CardListingScreen';
import Home from './app/AppScreen/Home';
import ListingDetails from './app/AppScreen/ListingDetails';
import WelcomeScreen from './app/AppScreen/WelcomeScreen';
import Navigator from './routes/welcomeStack'

export default function App() {
  return (
  //  <WelcomeScreen/>
  // <CardListingScreen/>
  // <ListingDetails/>
  // <Home/>
  <Navigator/>
  );
}
