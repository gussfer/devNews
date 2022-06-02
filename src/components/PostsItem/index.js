import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import {useNavigation} from "@react-navigation/native"

export default function PostsItem({data}) {
    const nav = useNavigation();
    function handleDetails(){
        nav.navigate("Details", {id: data?.id})
    }

    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={handleDetails}
            >
            <View style={styles.header}>
                <Image
                    style={styles.cover}
                    source={{uri: `http://172.20.10.4:1337${data?.attributes?.cover?.data?.attributes?.url}`}}

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
        borderRadius:5,
        opacity:0.6
    },
    body:{
        width:'70%'
    },
    text:{
        fontWeight:'bold',
        fontSize:14,
        marginBottom: 8,
    },
    description:{
        fontSize:13,
        lineHeight:16
    }
})