import {View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import React from 'react';

export default function CategoryItem({data}) {
    return(
        <TouchableOpacity 
        style={styles.container} 
        activeOpacity={0.5}>
            <Image
                style={styles.icon}
                source={{uri: `http://172.20.10.4:1337${data?.attributes?.icon?.data?.attributes?.url}`}}
            />
            <Text>{data?.attributes?.Name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "whitesmoke"
    },
    icon: {
        width: 40,
        height: 40
    }
})