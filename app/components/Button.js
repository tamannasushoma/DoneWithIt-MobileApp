import React from 'react';
import {  TouchableOpacity, StyleSheet, Text, Alert } from 'react-native';

function Button({title, color}) {
    const ButtonAlert = () =>
    Alert.alert(
      "Alert Title",
      "My Alert Msg",
      [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed")
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    return (
        <TouchableOpacity
        style={[styles.buttonStyle, {backgroundColor:color}]}
        onPress={ButtonAlert}
        >
            <Text
            style={styles.textStyle}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonStyle:{
        
        borderRadius: 25,
        justifyContent: "center",
        alignItems:"center",
        padding: 15,
        width: "100%",
        marginBottom: 10
    },
    textStyle:{
        color:"white",
        fontSize: 20,
        textAlign: "center"
    }
})

export default Button;