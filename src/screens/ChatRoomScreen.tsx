import React, {useCallback, useEffect, useState} from "react";
import {ImageBackground, FlatList, KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import {useRoute} from '@react-navigation/native';
import {GiftedChat} from "react-native-gifted-chat";

import ChatMessage from "../components/ChatMessage";
// @ts-ignore
import BackgroundImg from '../../assets/background.png';
import chatRoomData from '../data/Chats';
import InputBox from "../components/InputBox";
import LocalStorage from "../model/LocalStorage";

const ChatRoomScreen = () => {
    const route = useRoute();

    //@ts-ignore
    const chatroomId = route.params.id;

    const [messages, setMessages] = useState([]);

    const getUserId = async () => {
       LocalStorage.load(
            {key: "user", id:'1'}
        ).then((res) => {
            // console.log(res)
       });
    }
    const getMessages = async () => {
        LocalStorage.load(
            {key: 'chatroom', id:chatroomId}
        ).then((res) => {
            setMessages(res)
            // console.log(res)
        }).catch((e) => {
            if(e.name === 'NotFoundError'){
                // setMessages([])
            }
        })
    }

    const saveMessages = async (messages: any) => {
        LocalStorage.save({
            key: 'chatroom',
            id: chatroomId,
            data: messages
        })
    }

    useEffect(() => {
        getMessages()
    })

    const onSend = async (newMessages = []) => {
        await setMessages(GiftedChat.append(messages, newMessages));
        const newMessageList = newMessages.concat(messages)
        saveMessages(newMessageList)
    }

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BackgroundImg}>
            <GiftedChat
                messages={messages}
                onSend={newMessage => onSend(newMessage)}
                user={{
                    _id: 1,
                }}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ChatRoomScreen



