import React from "react";
import {ImageBackground, FlatList, KeyboardAvoidingView, Platform, StyleSheet, View} from "react-native";
import {useRoute} from '@react-navigation/native';
import ChatMessage from "../components/ChatMessage";

// @ts-ignore
import BackgroundImg from '../../assets/background.png';
import chatRoomData from '../data/Chats';
import InputBox from "../components/InputBox";

const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <ImageBackground style={{width: '100%', height: '100%'}} source={BackgroundImg}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset = {75}
            >

                <FlatList
                    data={chatRoomData.messages}
                    renderItem={({item}) => <ChatMessage message={item}/>}
                    inverted
                />
                <InputBox/>

            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default ChatRoomScreen



