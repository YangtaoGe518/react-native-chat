import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";
import { AuthContext } from "../components/context";
import LocalStorage from "../model/LocalStorage";

const UserStack = createStackNavigator();

const ContactStackScreen = (navigation: any) => (
    <UserStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#694fad',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <UserStack.Screen name="User" component={UserScreen} options={{
            title:'User'
        }} />
    </UserStack.Navigator>
);


const UserScreen = (navigation: any) => {

    const { colors } = useTheme();

    const theme = useTheme();

    const removeAllMessages = async () => {
        LocalStorage.clearMapForKey('chatroom')
            .then(
                () => {
                    console.warn("Message Cleared!")
                }
            )
    }

    // @ts-ignore
    const { signOut } = React.useContext(AuthContext);

    return (
        <View style={styles.container}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <Text style={{color: colors.text}}>User Screen</Text>
            <Button title={'Log Out'} onPress={() => {signOut()}}/>
            <Button title={'Clear Data'} onPress={() => {removeAllMessages()}}/>
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
