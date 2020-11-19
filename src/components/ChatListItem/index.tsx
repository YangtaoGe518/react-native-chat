import React from 'react';
import {View, Text, Image, TouchableWithoutFeedback} from "react-native";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

import { ChatRoom } from "../../model/Types";
import styles from "./styles";


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const member = chatRoom.members[1];

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate("ChatRoom", {
            id: chatRoom.id,
            name: member.name,
            member: member
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{uri: member.avatar}} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{member.name}</Text>
                        <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage.text}</Text>
                    </View>

                </View>

                <Text style={styles.time}>
                    {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
                </Text>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ChatListItem;
