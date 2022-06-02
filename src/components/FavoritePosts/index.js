import React from 'react';
import {useNavigation} from "@react-navigation/native"
import {View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity, Dimensions} from 'react-native'

const {width: WIDTH} = Dimensions.get("window") // metodo para coletar tamanho da tela

export default function FavoritePosts({data}){
    const nav = useNavigation();


    function handleNavigate(){
        nav.navigate("Details", {id: data.id})
    }
    return(
        <TouchableOpacity 
            style={styles.container}
            onPress={handleNavigate}          
        >
            <ImageBackground
                source={{uri: `http://172.20.10.4:1337${data?.attributes?.cover?.data?.attributes?.url}`}}
                style={styles.cover}
                resizeMode="cover"
                blurRadius={1}
                imageStyle={{borderRadius:8,opacity:0.6}}
            >
                <Text style={styles.title} numberOfLines={1}>
                    {data?.attributes?.Title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginRight: 8,
        flex: 1,
        height: 165,
    },
    cover:{
        borderRadius: 8,
        width: WIDTH - 60,
        height:100,
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingHorizontal:12,
        paddingVertical: 8,

    }
})