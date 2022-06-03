import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, Share} from 'react-native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {WebView} from 'react-native-webview'


export default function LinkWeb({link, title, closeModal}){
    return(
        <>
            <TouchableOpacity style={styles.button} onPress={closeModal}>
                <Text style={styles.name}>{title}</Text>
                <Icon name="close-thick" color={"red"} size={25}/>
            </TouchableOpacity>
            <WebView
                source={{uri: link}}
            />
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        padding: 10,
        backgroundColor: "#023047",
        marginTop:60,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        color: '#FFF',
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize:18
    }
})
