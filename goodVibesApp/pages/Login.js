import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Form from "../components/Form/Form";
import Logo from "../components/Logo/Logo";
import LinearGradient from "react-native-linear-gradient";
import Title from "../components/Title/Title";
import useStyles from "../hook/useStyles";
import useLogin from "../hook/useLogin";
import useLoginPage from "../hook/pages/useLoginPage";
import SecondaryButton from "../components/Button/SecondaryButton";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";


export default function Login({validate}) {
    const {navigation, errorMessage, submit} = useLogin()
    const {} = useLoginPage()
    const {styles} = useStyles()

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.containerLinear} colors={['#FFD1D1', '#6986BE']}>
                <Logo/>
                <Title>
                    Se connecter
                </Title>
                <Form action={'login'} submit={submit} styles={styles} validate={validate}/>
                <SecondaryButton handlePress={() => navigation.navigate('Register')}>S'enregistrer</SecondaryButton>
                <ErrorMessage styles={styles}>{errorMessage}</ErrorMessage>
            </LinearGradient>
        </View>
    );
}
