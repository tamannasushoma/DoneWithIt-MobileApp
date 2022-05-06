import React from 'react';
import { View, StyleSheet , Image} from 'react-native';
import AppText from '../components/AppText';

function ListingDetails(props) {
    return (
        <View>
            <Image  source={require("../assets/red.jpg")} style={styles.listImage}/>
            <View style={styles.detailsContainer}>
            <AppText style={{marginBottom: 5}}> Red Jacket for sale</AppText>
            <AppText> 1200 BDT</AppText>

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
    }
})

export default ListingDetails;