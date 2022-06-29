import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import Form from "../components/Form";
import {Text, Button} from "react-native";

export default function Login({navigation, submit, styles}) {

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/img/goodvibeslogo.png')}/>
            <Text style={styles.title}>
                Se connecter
            </Text>
            <Form action={'login'} submit={submit} styles={styles}/>
            <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.containerBtn}>
                <Text style={styles.btnSecondary}>S'enregistrer</Text>
            </TouchableOpacity>
        </View>
    );
}
