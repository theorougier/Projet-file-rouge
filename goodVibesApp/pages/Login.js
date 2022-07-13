import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Form from "../components/Form/Form";
import Logo from "../components/Logo/Logo";
import LinearGradient from "react-native-linear-gradient";
import Title from "../components/Title/Title";


export default function Login({navigation, submit, loginError, styles, validate}) {

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.containerLinear} colors={['#FFD1D1', '#6986BE']}>
                <Logo/>
                <Title>
                    Se connecter
                </Title>
                <Form action={'login'} submit={submit} styles={styles} validate={validate}/>
                <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.containerBtn}>
                    <Text style={styles.btnSecondary}>S'enregistrer</Text>
                </TouchableOpacity>
                <Text style={styles.errorMessage}>{loginError}</Text>
            </LinearGradient>
        </View>
    );
}
