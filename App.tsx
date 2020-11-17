import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {AuthContext} from './src/components/context';

import MainTabScreen from "./src/screens/MainTabScreen";
import RootScreen from "./src/screens/RootScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState('');

    const authContext = React.useMemo(() => ({
        signIn: () => {
            setUserToken('token');
            setIsLoading(false);
        },
        signOut: () => {
            setUserToken('');
            setIsLoading(false);
        },
        signUp: () => {
            setUserToken('token');
            setIsLoading(false);
        },
    }), []);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])

    if(isLoading) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                { userToken !== '' ? (
                    <Drawer.Navigator>
                        <Drawer.Screen name="Home" component={MainTabScreen} />
                    </Drawer.Navigator>
                ) :
                    <RootScreen/>
                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

