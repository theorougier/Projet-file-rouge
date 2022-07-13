import React from 'react';
import {StyleSheet} from 'react-native';
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
        submit,
        loginError,
        LogOut,
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
                        <Stack.Screen name="Login">{(props) => <Login {...props} styles={styles}
                                                                      submit={submit}
                                                                      loginError={loginError}/>}</Stack.Screen>
                        <Stack.Screen name="Register">{(props) => <Register {...props}
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