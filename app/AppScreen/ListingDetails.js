import React from 'react';
import { View, StyleSheet , Image} from 'react-native';
import AppText from '../components/AppText';

function ListingDetails({navigation}) {
    return (
        <View>
            <Image  source={navigation.getParam('image')} style={styles.listImage}/>
            <View style={styles.detailsContainer}>
            <AppText style={{marginBottom: 5}}> {navigation.getParam('title')}</AppText>
            <AppText style={styles.price}> {navigation.getParam('subtitle')}</AppText>
            <AppText style={styles.description}>Product Details:</AppText>
            <AppText> {navigation.getParam('description')}</AppText>

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