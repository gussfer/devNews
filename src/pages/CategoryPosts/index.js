import React, {useLayoutEffect, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import {useNavigation, useRoute} from "@react-navigation/native"
import api from '../../services/api'
import PostsItem from "../../components/PostsItem"



export default function CategoryPosts() {
    const nav = useNavigation();
    const routes = useRoute();
    const [posts, setPosts] = useState([])//armazena lista dos posts


    useLayoutEffect(() => {
        nav.setOptions({
            title: routes.params?.title
        })
    }, [nav])

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get(`api/categories/${routes.params?.id}?fields=name&populate=posts,posts.cover`)
            setPosts(response.data?.data?.attributes?.posts?.data)
        }
        loadPosts()
    }, [])

    return(
        <View style={styles.container}>
            {posts.length === 0 && (
                <View style={styles.containerWarning}>
                    <Text style={styles.warning}>
                        Não há posts aqui ainda...
                    </Text>
                </View>
            )}
            <FlatList
                style={{flex:1}}
                data={posts}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => <PostsItem data={item}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12,
        backgroundColor: '#EFEFEF',
    },
    containerWarning:{
        alignItems: 'center',
    },
    warning:{
        color: '#666',
        fontSize: 20,
        fontWeight: 'bold',

      }
})