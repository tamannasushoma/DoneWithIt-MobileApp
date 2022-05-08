import {React, useState} from 'react';
import { SafeAreaView, View, StyleSheet , Image, FlatList,TouchableOpacity, Platform, StatusBar } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';

function Home( {navigation} ) {
    const [list, setlist] = useState([
        {title: 'See all items', key:'1', icon: require('../icons/products.png')},
        {title: 'Categories', key:'2', icon: require('../icons/options.png')},
        {title: 'Sale', key:'3', icon: require('../icons/hot-sale.png')},
        {title: 'Top rated seller', key:'4', icon: require('../icons/top-rated.png')},
        {title: 'offers', key:'5', icon: require('../icons/price-tag.png')},
    ]);

    ItemSeperator = ()=>{
        return <View style={styles.seperator}></View>
    }

    const pressHandler = ()=>{
        navigation.navigate('Products')
    }

    ShowList = ( {item})=>{
        return (
        <ListItem 
        title={item.title}
        icon= {item.icon}
        onPress={pressHandler}
        />
        )
        // <TouchableOpacity 
        //         onPress={pressHandler}
        //         style={styles.item}>

        //            <View style={styles.avatarContainer}>
        //                <Image source={item.icon} style={styles.avatar}/>
        //                </View> 
        //             <AppText>{item.title}</AppText>

        //         </TouchableOpacity>
    }

    return (
        <SafeAreaView style={styles.listContainer}>
        
        <FlatList
        ListEmptyComponent={<AppText>No data found</AppText>}
        data={list}
        renderItem={ ShowList}
        keyExtractor={list=> list.key}
        ItemSeparatorComponent= {ItemSeperator}
        />
         </SafeAreaView>


        
    );
}

const styles = StyleSheet.create({
    
    listContainer:{
        paddingTop: Platform.OS==='android'? StatusBar.currentHeight : 0
    },
    seperator:{
        height: 3,
        width:'100%',
        backgroundColor: '#CCC'
    },
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

export default Home;