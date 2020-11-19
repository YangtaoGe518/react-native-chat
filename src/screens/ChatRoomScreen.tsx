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

    const [messages, setMessages] = useState([]);
    const [uid, setUid] = useState('');

    const getUserId = async () => {
       LocalStorage.load(
            {key: "user", id:'1'}
        ).then((res) => {
            console.log(res)
       });
    }

    useEffect(() => {
        getUserId()
    })

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BackgroundImg}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
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



