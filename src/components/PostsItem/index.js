import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, Image} from 'react-native'

export default function PostsItem({data}) {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.cover}
                    source={{uri: `http://192.168.0.15:1337${data?.attributes?.cover?.data?.attributes?.url}`}}
                />
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>{data?.attributes?.Title}</Text>
                <Text style={styles.description} numberOfLines={2}>{data?.attributes?.Description}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:12,
        borderWidth: 1,
        borderColor: '#9BC4CB',
        borderRadius: 5,
        marginBottom:14,
        paddingVertical:10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    header:{
        marginHorizontal:8
    },
    cover:{
        width: 90,
        height: 90,
    },
    body:{
        width:'70%'
    }
})