import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function CategoryPosts() {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Posts de uma categoria</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#9BC4CB',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    title:{
        color: 'whitesmoke',
        fontSize: 20,
        fontWeight: 'bold',
      }
})