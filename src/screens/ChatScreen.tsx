import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ChatScreen = (navigation: any) => {

    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <Text style={{color: colors.text}}>Chat Screen</Text>
        </View>
    );
};

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
