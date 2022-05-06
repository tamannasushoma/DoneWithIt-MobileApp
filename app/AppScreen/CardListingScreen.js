import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Card from '../components/Card';

function CardListingScreen(props) {
    return (
        <ScrollView style={styles.containerStyle}>
            <Card
            title="Red Jacket for sale"
            subtitle="1200 BDT"
            image={require("../assets/red.jpg")}
            />

            <Card
            title="bed side table for sale"
            subtitle="5000 BDT"
            image={require("../assets/table.jpg")}
            />

            <Card
            title="Leather shoes for sale"
            subtitle="5000 BDT"
            image={require("../assets/shoe.jpg")}
            />

          

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: "#f8f4f4",
        padding: 15,
        paddingTop: 100
    }
})

export default CardListingScreen;