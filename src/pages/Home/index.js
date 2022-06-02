import React, {useEffect, useState}from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, FlatList} from 'react-native'
import {useNavigation} from "@react-navigation/native"
import Icon from "react-native-vector-icons/FontAwesome5"
import api from '../../services/api';
import CategoryItem from "../../components/CategoryItem"
import PostsItem from "../../components/PostsItem"
import FavoritePosts from "../../components/FavoritePosts" 
import {getFavorite, setFavorite} from "../../services/favorite"




export default function Home() {
    const nav = useNavigation();
    const [categories, setCategories] = useState([]) //armazena informações das categorias
    const [favCategory, setFavCategory] = useState([])//armazena informações das categorias favoritadas
    const [posts, setPosts] = useState([])//armazena informações dos posts

    
    useEffect(() => {
       async function loadData() {
           await getPostsList() //retorna a busca de posts ao carregar a página
            const category = await api.get("/api/categories?populate=icon")
            setCategories(category.data.data) //armazena req get(categories)
        }
        loadData();
    }, [])
    
    useEffect(() => {
        async function favorite() {
             const response = await getFavorite()
             setFavCategory(response) //armazena categorias favoritadas
         }
         favorite();
     }, [])

     //buscando posts
    async function getPostsList() {
        const response = await api.get(`api/posts?populate=cover&sort=createdAt:desc`)//ordena get pela mais recente
        setPosts(response.data.data)
    }

    //favoritando categoria
   async function handleFavorite(id) {
        const response = await setFavorite(id)
        setFavCategory(response);
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
            <View style={styles.main}>
                {favCategory.length !== 0 && (
                    <FlatList 
                        style={{marginTop: 50, maxHeight: 165, paddingStart:12, borderRadius: 6}}
                        contentContainerStyle={{paddingEnd:20}}
                        data={favCategory}
                        horizontal={true}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => 
                            <FavoritePosts 
                                data={item}/>
                            }
                        />
                )}
                <Text 
                    style={[styles.title,{marginTop: favCategory.length > 0 ? 14: 60}]}>Categorias em alta</Text>
                    <FlatList
                        styles={{flex:1}}
                        data={posts}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => <PostsItem data={item}/>}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginBottom: 10,
    },
    categories:{
        backgroundColor: "#9BC4CB",
        maxHeight:115,
        height: 150,
        marginHorizontal: 12,
        borderRadius: 8,
        zIndex:9,
    },
    main:{
        backgroundColor: "#EFEFEF",
        flex: 1,
        marginTop: -40
    },
    title:{
        paddingHorizontal: 12,
        marginTop: 40,
        marginBottom: 12,
        fontSize: 21,
        fontWeight: 'bold',
        color: '#023047'
    },
    name:{
        top: 5,
        color: '#9BC4CB',
        fontSize: 24,
        fontWeight: 'bold',
        margin: 14,
        marginHorizontal: 10,
        fontFamily: 'Helvetica'
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