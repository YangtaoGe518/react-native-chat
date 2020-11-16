import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

const ContactStack = createStackNavigator();

const ContactStackScreen = (navigation: any) => (
    <ContactStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#d02860',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <ContactStack.Screen name="Contacts" component={ContactScreen} options={{
            title:'Contacts'
        }} />
    </ContactStack.Navigator>
);


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

export default ContactStackScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
