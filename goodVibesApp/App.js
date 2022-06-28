import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Login from "./pages/Login";
import useLogin from "./hook/useLogin";

export default function App() {
    const Stack = createNativeStackNavigator();
    const {
        logged,
        LogOut,
        submit,
        userEmail,
    } = useLogin()


    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!logged ?
                    <Stack.Screen name="Login">{(props) => <Login {...props} submit={submit}/>}</Stack.Screen>
                    :
                    <Stack.Screen name="Home">{(props) => <Home {...props} LogOut={LogOut} userEmail={userEmail}/>}</Stack.Screen>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
