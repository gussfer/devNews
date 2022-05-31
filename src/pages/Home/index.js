import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome5"



export default function Home() {
    const nav = useNavigation();
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>DevNews!</Text>
                <TouchableOpacity>
                    <Icon name="search" style={styles.name}/>
                </TouchableOpacity>
            </View>
            <View style={styles.button}>
                <Button
                    title="Go to CategoryPosts"
                    onPress={() => nav.navigate("CategoryPosts")}
                    color="#023047"
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Go to Details"
                    onPress={() => nav.navigate("Details")}
                    color="#023047"
                />
            </View>
            <View style={styles.button}>
                <Button
                    title="Go to Search"
                    onPress={() => nav.navigate("Search")}
                    color="#023047"
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#023047',
        flex: 1,
    },
    header:{
        backgroundColor: "#023047",
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 150,
    },
    name:{
        top: 10,
        color: '#9BC4CB',
        fontSize: 26,
        fontWeight: 'bold',
        margin: 14,
        marginHorizontal: 20
      },
    button:{
        backgroundColor:"#9BC4CB",
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 40

    }

})