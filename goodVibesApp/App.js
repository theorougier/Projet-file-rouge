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
import FormPreferences from "./components/Form/FormPreferences";

export default function App() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login">{(props) => <Login/>}</Stack.Screen>
                <Stack.Screen name="Preferences">{(props) => <FormPreferences/>}</Stack.Screen>
                <Stack.Screen name="Register">{(props) => <Register/>}</Stack.Screen>
                <Stack.Screen name="Home">{(props) => <Home/>}</Stack.Screen>
                <Stack.Screen name="Options">{(props) => <Options/>}</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}