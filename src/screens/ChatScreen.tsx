import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, StatusBar, FlatList} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import ChatListItem from '../components/ChatListItem';
import LocalStorage from "../model/LocalStorage";
import {ChatRoom} from "../model/Types";

const ChatStack = createStackNavigator();

const ChatStackScreen = ({navigation}: any) => (
    <ChatStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ChatStack.Screen name="Chats" component={ChatScreen} options={{
            title:'Chats'
        }} />
    </ChatStack.Navigator>
);

const ChatScreen = ({navigation}: any) => {
    const theme = useTheme();

    const [chatRooms, setChatRooms] = useState([]);
    const getActiveChatRooms = async () => {
        await LocalStorage.getAllDataForKey('chatroom')
            .then((chats:ChatRoom[]) => {
                // console.log(chats);
                setChatRooms(chats)

            })
            .catch((e) => {

        });
    }

    useEffect(() => {
        getActiveChatRooms()
    })


    return (
        <View style={styles.container}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <FlatList
                style={{width: '100%'}}
                data={chatRooms}
                renderItem={({ item }) => <ChatListItem chatRoom={item} />}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
};

export default ChatStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
