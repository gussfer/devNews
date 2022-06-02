import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function Details() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Página de Detalhes do post</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title:{
        color: '#023047',
        fontSize: 20,
        fontWeight: 'bold',
      }
})