import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar, FlatList} from 'react-native';
import { useTheme } from '@react-navigation/native';
import {createStackNavigator} from "@react-navigation/stack";

import contacts from '../data/Contacts';
import ContactListItem from "../components/ContactListItem";

const ContactStack = createStackNavigator();

const ContactStackScreen = ({navigation}: any) => (
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
                <FlatList
                    style={{width: '100%'}}
                    data={contacts}
                    renderItem={({ item }) => <ContactListItem member={item} />}
                    keyExtractor={(item) => item._id}
                />
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
