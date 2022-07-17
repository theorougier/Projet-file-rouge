import React from 'react'
import {Button, Text, TouchableOpacity, View} from "react-native";
import Logo from "../components/Logo/Logo";
import Title from "../components/Title/Title";
import useStyles from "../hook/useStyles";
import useLogin from "../hook/useLogin";
import LinearGradients from "../components/LinearGradients/LinearGradients";

export default function Options() {
    const {styles} = useStyles()
    const {LogOut, navigation} = useLogin()

    return (
        <View style={styles.container}>
            <LinearGradients>
                <Logo/>
                <Title>Settings</Title>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <Button
                    title="LogOut"
                    onPress={LogOut}
                />
            </LinearGradients>
        </View>
    )
}