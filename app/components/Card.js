import React from 'react';
import { View, Image, StyleSheet } from 'react-native'; 
import AppText from './AppText';

function Card({image, title, subtitle}) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.image}/>

            <View style={styles.textContainer}>
            <AppText style={styles.titleStyle}>{title}</AppText>
            <AppText style={styles.subtitleStyle}>{subtitle}</AppText>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        overflow:"hidden",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 20
    },
    image:{
        width: "100%",
        height: 200
    },
    textContainer:{
        padding: 20
    },
    titleStyle:{
        marginBottom: 5
    },
    subtitleStyle:{
        color: "green",
        fontWeight: "bold"
    }
})

export default Card;