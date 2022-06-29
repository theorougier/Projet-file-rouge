import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import Form from "../components/Form";

export default function Register({navigation, styles}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/img/goodvibeslogo.png')}/>
            <Text style={styles.title}>
                S'enregistrer
            </Text>
            <Form styles={styles}/>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.containerBtn}>
                <Text style={styles.btnSecondary}>Se connecter</Text>
            </TouchableOpacity>
        </View>
    )
}