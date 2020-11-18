import React from 'react';
import { View, Text, Image } from "react-native";
import moment from "moment";

import {ChatRoom} from "../../model/Types";
import styles from "./styles";


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;

    const member = chatRoom.members[1];

    return (
        <View style={styles.container}>
            <View style={styles.lefContainer}>
                <Image source={{uri: member.imageUri}} style={styles.avatar}/>

                <View style={styles.midContainer}>
                    <Text style={styles.username}>{member.name}</Text>
                    <Text numberOfLines={2} style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                </View>

            </View>

            <Text style={styles.time}>
                {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    )
};

export default ChatListItem;
