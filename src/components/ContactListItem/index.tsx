import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback
} from "react-native";
import moment from "moment";
import { useNavigation } from '@react-navigation/native';

import styles from "./styles";
import {Member} from "../../model/Types";

export type ContactListItemProps = {
    member: Member;
}

const ContactListItem = (props: ContactListItemProps) => {
    const { member } = props;

    const navigation = useNavigation();

    const onClick = () => {
        navigation.navigate("ChatRoom", {
            id: member.id,
            name: member.name
        })
    }

    return (
        <TouchableWithoutFeedback onPress={onClick}>
            <View style={styles.container}>
                <View style={styles.lefContainer}>
                    <Image source={{ uri: member.imageUri }} style={styles.avatar}/>

                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{member.name}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default ContactListItem;
