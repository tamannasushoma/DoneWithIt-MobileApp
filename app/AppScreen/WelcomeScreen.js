import React from 'react';
import { ImageBackground, StyleSheet, View, Image,Text } from 'react-native';
import { Alert } from 'react-native-web';
import Button from '../components/Button';

function WelcomeScreen(props) {

    
    return (
            <ImageBackground
            blurRadius={5}
            style={styles.background}
            source={require("../assets/background.jpg")}>

            <View
            style={styles.logoContainer}
            >
            <Image
            style={styles.logoStyle}
            source={require("../assets/scissors.png")}
            />
            <Text>Sell what u don't need</Text>

            </View>
            
            <View style={styles.buttonContainer}>
            <Button title="Login"  color="tomato" />
            <Button title="Signup" color="#4ecdc4"  />

            </View>
                
            </ImageBackground>
       
    );
}

const styles = StyleSheet.create({
    background:{
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    logoStyle:{
        width: 70,
        height: 70,
    },
    logoContainer:{
        position: "absolute",
        top:90,
        alignItems:"center",
        fontSize:20

    },
    buttonContainer:{
        padding: 20,
        width:"100%"
    }
})

export default WelcomeScreen;