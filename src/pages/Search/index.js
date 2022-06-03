import React, {useState} from 'react';
import Icon from "react-native-vector-icons/FontAwesome5"
import {View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard} from 'react-native'
import api from "../../services/api"
import PostsItem from "../../components/PostsItem"


export default function Search() {

    const [input, setInput] = useState("")//armazena valor digitado no input
    const [posts, setPosts] = useState([])
    const [empty, setEmpty] = useState(false)

    async function handleSearchPost(){
        if(input === ""){
            alert("Digite um nome para busca!")
            return;
        }
        const response = await api.get(`api/posts?filters[title][$containsi]=${input}&populate=cover`)
        if (response.data?.data.length === 0) {
            setEmpty(true)
            setPosts([])
            return
        }
        setPosts(response.data?.data)
        setEmpty(false)
        setInput("")
        Keyboard.dismiss()
    }

    return(
        <View style={styles.container}>
            <View style={styles.containerInput}>
                <TextInput
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    style={styles.input} 
                    placeholder="O que está buscando?"
                    placeholderTextColor={"#666"}
                />
                <TouchableOpacity style={styles.searchButton} onPress={handleSearchPost}>
                    <Icon name="search" size={25} color={"#023047"}/>
                </TouchableOpacity>
            </View>
            {empty && (
                <View>
                    <Text style={styles.emptyText}>Nenhum post encontrado...</Text>
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
        backgroundColor: '#EFEFEF',
        padding: 18

    },
    containerInput:{
        flexDirection: 'row',
        width: "100%",
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20

    },
    input:{
        width: "85%",
        backgroundColor: "#9BC4CB",
        height: 45,
        padding: 10,
        borderWidth: 1,
        borderColor: '#6666',
        fontSize: 16,
        borderTopLeftRadius: 3,
        borderBottomLeftRadius: 3,
        borderEndColor:"#9BC4CB"
    },
    searchButton:{
        backgroundColor: "#9BC4CB",
        height: 45,
        borderWidth: 1,
        borderColor: '#6666',
        borderLeftColor:"#9BC4CB",
        width: "15%",
        justifyContent: 'center',
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        alignItems: 'center',
        fontWeight: 'bold',
      },
      emptyText:{
          color: "#666"
      }
})