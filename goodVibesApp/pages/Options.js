import React from 'react'
import {Button, Text, TouchableOpacity, View} from "react-native";
import Logo from "../components/Logo/Logo";
import LinearGradient from "react-native-linear-gradient";
import Title from "../components/Title/Title";

export default function Options({navigation, styles, LogOut}) {
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