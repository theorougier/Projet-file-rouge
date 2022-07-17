import React from 'react'
import {Button, Text, TouchableOpacity, View} from "react-native";
import Logo from "../components/Logo/Logo";
import LinearGradient from "react-native-linear-gradient";
import Title from "../components/Title/Title";
import useStyles from "../hook/useStyles";
import useLogin from "../hook/useLogin";

export default function Options() {
    const {styles} = useStyles()
    const {LogOut, navigation} = useLogin()

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.containerLinear} colors={['#FFD1D1', '#6986BE']}>
                <Logo/>
                <Title>Settings</Title>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text>Home</Text>
                </TouchableOpacity>
                <Button
                    title="LogOut"
                    onPress={LogOut}
                />
            </LinearGradient>
        </View>
    )
}