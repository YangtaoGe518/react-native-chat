import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar, FlatList} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms';

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
