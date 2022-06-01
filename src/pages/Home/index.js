import React, {useEffect, useState}from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, FlatList} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome5"
import api from '../../services/api';
import CategoryItem from "../../components/CategoryItem"
import {getFavorite, setFavorite} from "../../services/favorite"




export default function Home() {
    const nav = useNavigation();
    const [categories, setCategories] = useState([])
    //armazena req get(categories)
    useEffect(() => {
       async function loadData() {
            const category = await api.get("/api/categories?populate=icon")
            setCategories(category.data.data)
        }
        loadData();
    }, [])

    //favoritando categoria
   async function handleFavorite(id) {
        const response = await setFavorite(id)
        console.log(response);
        alert("Categoria Favritada!" + id)
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>DevNews!</Text>
                <TouchableOpacity onPress={() => nav.navigate("Search")}>
                    <Icon name="search" style={styles.name}/>
                </TouchableOpacity>
            </View>
            <View style={styles.categories}>
                <FlatList
                    horizontal={true}
                    data={categories}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({item}) => (
                        <CategoryItem
                            data={item}
                            favorite={() => handleFavorite(item.id)}
                        />
                    )}
                />
            </View>
            <Text style={styles.title}>Conteúdos em alta</Text>
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
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFEF',
        flex: 1,
    },
    header:{
        backgroundColor: "#023047",
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 150,
    },
    categories:{
        backgroundColor: "#9BC4CB",
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: -70,
        height: 110,
        marginHorizontal: 15,
        borderRadius: 8,
    },
    cards:{
        backgroundColor: "#EFEFEF",
        top: 10,
        height: 90,
        width: 10,
        borderRadius: 5,
        marginHorizontal: 50,
    },
    title:{
        marginHorizontal: 30,
        fontSize: 18,
        fontWeight: 'bold',
        top: -40,
    },
    name:{
        top: 10,
        color: '#9BC4CB',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 14,
        marginHorizontal: 20
      },
    button:{
        top: -40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#9BC4CB",
        borderRadius: 5,
        marginTop: 20,
        marginHorizontal: 30,
        height: 90,
    }
})