import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const ContactScreen = (navigation: any) => {

    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <Text style={{color: colors.text}}>Contact Screen</Text>
        </View>
    );
};

export default ContactScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
