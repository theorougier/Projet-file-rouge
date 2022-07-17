import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Form from "../components/Form/Form";
import useLogin from "../hook/useLogin";
import Logo from "../components/Logo/Logo";
import LinearGradient from "react-native-linear-gradient";
import Title from "../components/Title/Title";
import useStyles from "../hook/useStyles";
import SecondaryButton from "../components/Button/SecondaryButton";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

export default function Register() {
    const {
        register,
        validate,
        errorMessage,
        navigation
    } = useLogin()
    const {styles} = useStyles()

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.containerLinear} colors={['#FFD1D1', '#6986BE']}>
                <Logo/>
                <Title>
                    S'enregistrer
                </Title>
                <Form styles={styles} register={register} validate={validate}/>
                <SecondaryButton styles={styles} handlePress={() => navigation.navigate('Login')}>Se connecter</SecondaryButton>
                <ErrorMessage styles={styles}>{errorMessage}</ErrorMessage>
            </LinearGradient>
        </View>
    )
}