import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Login from "./pages/Login";
import useLogin from "./hook/useLogin";
import useUser from "./hook/useUser";
import Options from "./pages/Options";
import useStyles from "./hook/useStyles";
import Register from "./pages/Register";

export default function App() {
    const Stack = createNativeStackNavigator();
    const {
        logged,
        LogOut,
        submit,
        userEmail,
    } = useLogin()
    const {} = useUser()
    const {styles} = useStyles()


    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                {!logged ?
                    <>
                        <Stack.Screen name="Login">{(props) => <Login {...props} submit={submit}
                                                                      styles={styles}/>}</Stack.Screen>
                        <Stack.Screen name="Register">{(props) => <Register {...props} submit={submit}
                                                                            styles={styles}/>}</Stack.Screen>
                    </>
                    :
                    <>
                        <Stack.Screen name="Home">{(props) => <Home {...props} styles={styles}/>}</Stack.Screen>
                        <Stack.Screen name="Options">{(props) => <Options {...props} styles={styles}
                                                                          LogOut={LogOut}/>}</Stack.Screen>
                    </>
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
