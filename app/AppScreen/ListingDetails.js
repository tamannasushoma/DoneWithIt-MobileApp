import React from 'react';
import { View, StyleSheet , Image} from 'react-native';
import AppText from '../components/AppText';

function ListingDetails({route, navigation}) {
    const { item } = route.params;
    return (
        <View>
            <Image  source={item.image} style={styles.listImage}/>
            <View style={styles.detailsContainer}>
            <AppText style={{marginBottom: 5}}> {item.title}</AppText>
            <AppText style={styles.price}> {item.subtitle}</AppText>
            <AppText style={styles.description}>Product Details:</AppText>
            <AppText> {item.description}</AppText>

            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    listImage:{
        width:"100%",
        height:300
    },
    detailsContainer:{
        padding: 10
    },
    price:{
        color: "green",
        fontWeight: 'bold',
    },
    description:{
        marginTop: 10,
        fontWeight: 'bold'
    }

})

export default ListingDetails;