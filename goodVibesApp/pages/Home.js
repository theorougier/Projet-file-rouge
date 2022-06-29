import React from 'react';
import {Text, View, Button, TouchableOpacity, Image, StyleSheet} from "react-native";

export default function Home({navigation, LogOut, styles}) {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Options')} style={styles.optionsBtn}>
                <Image source={require('../assets/img/settings.png')}/>
            </TouchableOpacity>
            <Image style={styles.image} source={require('../assets/img/goodvibeslogo.png')}/>
        </View>
    )
}