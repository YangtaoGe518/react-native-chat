import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ChatScreen from "./ChatScreen";
import ContactScreen from "./ContactScreen";
import UserScreen from "./UserScreen";

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
        initialRouteName="Chat"
        activeColor="#fff"
        shifting
    >
        <Tab.Screen
            name="Chats"
            component={ChatScreen}
            options={{
                tabBarLabel: 'Chats',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="ios-chatbubbles" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Contacts"
            component={ContactScreen}
            options={{
                tabBarLabel: 'Contacts',
                tabBarColor: '#d02860',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="ios-contacts" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="User"
            component={UserScreen}
            options={{
                tabBarLabel: 'User',
                tabBarColor: '#694fad',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="ios-person" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;
