import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from "./src/screens/MainTabScreen";
import RootScreen from "./src/screens/RootScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <RootScreen/>
        {/*<Drawer.Navigator>*/}
        {/*  <Drawer.Screen name="Home" component={MainTabScreen} />*/}
        {/*</Drawer.Navigator>*/}
      </NavigationContainer>
  );
}

