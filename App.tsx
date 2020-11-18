import {StatusBar} from 'expo-status-bar';
import 'react-native-get-random-values';
import React, {useEffect} from 'react';
import {ActivityIndicator, Alert, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

import {AuthContext} from './src/components/context';

import MainTabScreen from "./src/screens/MainTabScreen";
import RootScreen from "./src/screens/RootScreen";
import { userList } from "./src/model/User";
import ChatRoomScreen from "./src/screens/ChatRoomScreen";

const Stack = createStackNavigator();

export default function App() {
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
        signIn: async (username: string, password: string) => {
            let userToken = '';

            const validatedUsers = userList.filter((item) => {
                return username === item.username && password === item.password;
            });

            if (validatedUsers.length === 0){
                Alert.alert('Invalid User', 'Username or password is incorrect.', [
                    {text: 'Okay'}
                ]);
                return;
            } else {
                try {
                    userToken = uuidv4();
                    // console.log(userToken);
                    await AsyncStorage.setItem('userToken', userToken);
                } catch (e) {
                    console.log(e);
                }
            }

            dispatch({type: 'LOGIN', id: username, token: userToken});
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({type: 'LOGOUT'});
        },
        signUp: () => {
            // implement signUp here
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
                    <Stack.Navigator screenOptions={{
                        headerStyle: {
                            backgroundColor: '#009387',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        }
                    }}>
                        <Stack.Screen
                            name="Home"
                            component={MainTabScreen}
                            options={{headerShown:false}}
                        />
                        <Stack.Screen
                            name="ChatRoom"
                            component={ChatRoomScreen}
                            options={({route}) => ({
                                //@ts-ignore
                                title: route.params.name,
                            })}
                        />
                    </Stack.Navigator>
                ) :
                    <RootScreen/>
                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

