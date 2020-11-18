import React from "react";
import { ImageBackground, FlatList } from "react-native";
import { useRoute } from '@react-navigation/native';
import ChatMessage from "../components/ChatMessage";

// @ts-ignore
import BackgroundImg from '../../assets/background.png';
import chatRoomData from '../data/Chats';

const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BackgroundImg}>
            <FlatList
                data={chatRoomData.messages}
                renderItem={({ item }) => <ChatMessage message={item} />}
                inverted
            />

        </ImageBackground>
    );
}

export default ChatRoomScreen
