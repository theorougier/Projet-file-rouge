import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Options from "./pages/Options";
import Register from "./pages/Register";
import FormPreferences from "./components/Form/FormPreferences";
import AccountParameters from "./pages/AccountParameters";
import FavoriList from "./pages/FavoriList";

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
                <Stack.Screen name="PersonalInformations">{(props) => <AccountParameters/>}</Stack.Screen>
                <Stack.Screen name="Favori">{(props) => <FavoriList/>}</Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}