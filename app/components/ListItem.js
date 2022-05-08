import React from 'react';
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import AppText from '../components/AppText';


function ListItem({title, icon, onPress}) {
    return (
        <TouchableOpacity 
                onPress={onPress}
                style={styles.item}>

                   <View style={styles.avatarContainer}>
                       <Image source={icon} style={styles.avatar}/>
                       </View> 
                    <AppText>{title}</AppText>

                </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    avatarContainer:{
        borderRadius: 90,
        height: 80,
        width:80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar:{
        height: 50,
        width: 50
    },
    item:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
    }
})

export default ListItem;