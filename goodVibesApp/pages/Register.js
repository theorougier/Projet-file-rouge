import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Form from "../components/Form/Form";
import useLogin from "../hook/useLogin";
import Logo from "../components/Logo/Logo";
import LinearGradient from "react-native-linear-gradient";
import Title from "../components/Title/Title";

export default function Register({navigation, styles}) {
    const {
        register,
        validate,
        registerError,
    } = useLogin(navigation)

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.containerLinear} colors={['#FFD1D1', '#6986BE']}>
                <Logo/>
                <Title>
                    S'enregistrer
                </Title>
                <Form styles={styles} register={register} validate={validate}/>
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.containerBtn}>
                    <Text style={styles.btnSecondary}>Se connecter</Text>
                </TouchableOpacity>
                <Text style={styles.errorMessage}>{registerError}</Text>
            </LinearGradient>
        </View>
    )
}