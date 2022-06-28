import React from 'react';
import {StyleSheet, View} from 'react-native';
import Form from "../components/Form";
import {Text} from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {Button} from "react-native-web";

export default function Login({navigation, submit}) {

    return (
        <View style={styles.container}>
            <Text>
                Connexion
            </Text>
            <Form action={'login'} submit={submit}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightpink',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
