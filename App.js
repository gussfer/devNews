import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Routes from './src/routes';
import {NavigationContainer} from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#023047" barStyle='light-content'/>
      <Routes/>
    </NavigationContainer>
  );
}


