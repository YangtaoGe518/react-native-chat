import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContext} from './src/components/context';

import MainTabScreen from "./src/screens/MainTabScreen";
import RootScreen from "./src/screens/RootScreen";

const Drawer = createDrawerNavigator();

export default function App() {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState('');

    const initialLoginState = {
        isLoading: true,
        userName: '',
        userToken: '',
    };

    const loginReducer = (prevState:any, action:any) => {
        switch( action.type ) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: '',
                    userToken: '',
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    const authContext = React.useMemo(() => ({
        signIn: async (userName: string, password: string) => {
            // setUserToken('token');
            // setIsLoading(false);
            let userToken = '';
            if (userName === 'user' && password === 'password') {
                try {
                    userToken = 'token';
                    await AsyncStorage.setItem('userToken', userToken);
                } catch (e) {
                    console.log(e);
                }
            }
            dispatch({type: 'LOGIN', id: userName, token: userToken});
        },
        signOut: async () => {
            // setUserToken('');
            // setIsLoading(false);
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'LOGOUT'});
        },
        signUp: () => {
            // setUserToken('token');
            // setIsLoading(false);
        },
    }), []);

    useEffect(() => {
        setTimeout(() => {
            // setIsLoading(false);
            let userToken = '';
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 1000);
    }, [])

    if(loginState.isLoading) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large'/>
            </View>
        )
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                { loginState.userToken !== '' ? (
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

