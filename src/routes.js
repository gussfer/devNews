import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from './pages/Home';
import Details from './pages/Details';
import CategoryPosts from './pages/CategoryPosts';
import Search from './pages/Search';

const Stack = createNativeStackNavigator();

function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name="Details"
                component={Details}
                options={{
                    title: "Detalhes do Post",
                    headerTintColor: "#9BC4CB",
                    headerStyle:{
                        backgroundColor: '#001427'
                    }
                }}
             />
            <Stack.Screen
                name="CategoryPosts"
                component={CategoryPosts}
                options={{
                    title: "Detalhes do Post",
                    headerTintColor: "#9BC4CB",
                    headerStyle:{
                        backgroundColor: '#001427'
                    }
                }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{
                    title: "Detalhes do Post",
                    headerTintColor: "#9BC4CB",
                    headerStyle:{
                        backgroundColor: '#001427'
                    }
                }}
            />
        </Stack.Navigator>
    )
}

export default Routes;
