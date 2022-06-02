import React, {useEffect, useState, useLayoutEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, Share} from 'react-native'
import {useNavigation, useRoute} from "@react-navigation/native"
import api from "../../services/api"
import Icon from "react-native-vector-icons/FontAwesome5"
import Icon1 from "react-native-vector-icons/Fontisto"


export default function Details() {
    const route = useRoute();
    const nav = useNavigation();

    const [posts, setPosts] = useState({})//armazena informações de um post
    const [links, setLinks] = useState([])


    useEffect(() => {
        async function getPost(){
            const response = await api.get(`api/posts/${route.params?.id}?populate=cover,category,options`)
            setPosts(response.data.data)
            setLinks(response.data?.data?.attributes?.options)
        } 
        getPost();
    }, [])

    useLayoutEffect(() => {
        nav.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={handleShare}>
                    <Icon1 name="share" size={25} color={"#9BC4CB"}/>
                </TouchableOpacity>
            )
        })
    }, [nav, posts])

    async function handleShare(){
        try{
            const result = await Share.share({
                message: `
                Confira este post: ${posts?.attributes?.Title}

                ${posts?.attributes?.Description}

                Vi lá np app DevNews!
                `
            })
            if (result.action === Share.sharedAction){
                if (result.activityType){
                    console.log("ACTIVE TYPE")
                } else{
                    console.log("COMPARTILHADO")
                }  
            }  else if(result.action === Share.dismissedAction){
                console.log("MODAL FECHADO")
            }
        }catch(erro){
            console.log("Error")
        }
    }
    function handleOpenLink(){
        
    }


    return(
        <SafeAreaView style={styles.container}>
            <Image 
                resizeMode='cover'
                style={styles.cover}
                source={{uri: `http://172.20.10.4:1337${posts?.attributes?.cover?.data?.attributes?.url}`}}
            />
            <ScrollView style={styles.content}>
                <Text style={styles.title}>{posts?.attributes?.Title}</Text>
                <Text style={styles.description}>{posts?.attributes?.Description}</Text>
                {links.length > 0 && (<Text style={styles.title}>Links</Text>)}
                {links.map(link =>(
                    <TouchableOpacity 
                        key={link.id} 
                        style={styles.linkIcon}
                        onPress={() => handleOpenLink()}
                    >
                            
                        <Icon name="link" color={"#9BC4CB"} size={14}/>
                        <Text style={styles.linkText}>{link.name}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFEF',
        flex: 1,
    },
    title:{
        color: '#023047',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 14,
        paddingHorizontal:12
      },
      cover:{
        width: "100%",
        height: 230,
    },
    content: {
        paddingHorizontal: 12
    },
    description:{
        fontSize: 16,
        lineHeight: 20,
        paddingHorizontal: 12,
        textAlign: "justify"

    },
    linkIcon:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:8,
        marginLeft: 12,

    },
    linkText:{
        color: '#9BC4CB',
        fontSize: 16,
        marginLeft: 12,
        fontWeight: 'bold',

    },
})