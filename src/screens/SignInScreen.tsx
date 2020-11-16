import {useTheme} from "@react-navigation/native";
import {StatusBar, StyleSheet, Text, View} from "react-native";
import React from "react";

const SignInScreen = (navigation: any) => {

    const { colors } = useTheme();

    const theme = useTheme();

    return (
        <View style={styles.container}>
            <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
            <Text style={{color: colors.text}}>SignIn Screen</Text>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
