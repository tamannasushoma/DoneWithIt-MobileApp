import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation"
import WelcomeScreen from "../app/AppScreen/WelcomeScreen";
import Home from "../app/AppScreen/Home";
import CardListingScreen from './../app/AppScreen/CardListingScreen';
import ListingDetails from "../app/AppScreen/ListingDetails";

const screens ={
    Welcome:{
        screen: WelcomeScreen,
        navigationOptions: {headerShown: false }
    },
    Home:{
        screen: Home
    },
    Products:{
        screen: CardListingScreen
    },
    ProductDetails:{
        screen: ListingDetails
    }
}

const WelcomeStack = createStackNavigator(screens);

export default createAppContainer(WelcomeStack);