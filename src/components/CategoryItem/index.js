import React from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, Image} from 'react-native'
import {useNavigation} from "@react-navigation/native"


export default function CategoryItem({data, favorite}) {

  const nav = useNavigation();
  function handleNavigate(){
    nav.navigate("CategoryPosts", {id: data.id, title: data?.attributes?.Name}) //{} - permite o envio de um parametro 
  }


    return(
        <TouchableOpacity 
          style={styles.container} 
          activeOpacity={0.5}
          onPress={handleNavigate}  
          onLongPress={favorite}
        >
          <Image
              style={styles.icon}
              source={{uri:`http://192.168.0.15:1337${data?.attributes?.icon?.data?.attributes?.url}`}}
          />
          <Text style={styles.name}>{data?.attributes?.Name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#EFEFEF',
      marginLeft: 8,
      marginVertical: 8,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20
    },
    icon: {
      width: 40,
      height: 40
    }
  })
// const styles = StyleSheet.create({
//     container:{
//         alignItems: 'center',
//         backgroundColor: "#EFEFEF",
//         marginLeft: 12,
//         marginVertical: 12,
//         width: 70,
//         borderRadius: 5,
//     },
//     icon: {
//         top: 2,
//         width: 50,
//         height: 50,
//     }
// })