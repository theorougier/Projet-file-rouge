import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, Button} from "react-native";

export default function Options({navigation, styles, LogOut}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/img/goodvibeslogo.png')}/>
            <Text style={styles.title}>Settings</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
            <Button
                title="LogOut"
                onPress={LogOut}
            />
        </View>
    )
}