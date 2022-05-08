import {React, useState} from 'react';
import { View, StyleSheet, ScrollView , FlatList} from 'react-native';
import Card from '../components/Card';
import AppText from '../components/AppText';
import { TouchableOpacity } from 'react-native-gesture-handler';


function CardListingScreen({navigation}) {

    const [items, setItems] = useState([
        {title:"Red Jacket for sale",
        subtitle:"1200 BDT",
        description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        image: require("../assets/red.jpg"),
        key: 1 },

        {title:"bed side table for sale",
        subtitle:"5000 BDT",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
        image: require("../assets/table.jpg"),
        key: 2 },

        {title: "Leather shoes for sale",
        subtitle: "5000 BDT",
        description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, ",
        image: require("../assets/shoe.jpg"),
        key: 3 }
    ]);

    // const ShowItems = ( {item} )=>{
    //     return (

    //         <Card
    //         title={item.title}
    //         subtitle={item.subtitle}
    //         image={item.image}
    //         />

            
    //     )
    // }

    return (
        <ScrollView style={styles.containerStyle}>

            {items.map((item)=>
            <TouchableOpacity
            key={item.key}
            onPress={()=> navigation.navigate('ProductDetails', item)}
            >
                 <Card
                 title={item.title}
                 subtitle={item.subtitle}
                 image={item.image}
                 
                 />
                 </TouchableOpacity>
            )}

        {/* <FlatList
        ListEmptyComponent={<AppText>No data found</AppText>}
        data={items}
        renderItem={ ShowItems}
        keyExtractor={items=> items.key}
        scrollEnabled={false}
        
        /> */}

</ScrollView>
    );
}

const styles = StyleSheet.create({
    containerStyle:{
        backgroundColor: "#f8f4f4",
        padding: 15,
        paddingTop: 20
    }
})

export default CardListingScreen;