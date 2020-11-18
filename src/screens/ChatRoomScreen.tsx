import React from "react";
import { View, Text } from "react-native";
import { useRoute } from '@react-navigation/native';

const ChatRoomScreen = () => {
    const route = useRoute();

    return (
        <View>
            <Text>
                {
                    //@ts-ignore
                    route.params.id
                }
            </Text>
        </View>
    )
}

export default ChatRoomScreen
