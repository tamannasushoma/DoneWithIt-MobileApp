import React from 'react';
import { View, StyleSheet , Image} from 'react-native';
import AppText from '../components/AppText';

function About({navigation}) {
    return (
        <View>
            <AppText> lorem ipsum</AppText>

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

export default About;