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
import LinearGradients from "../components/LinearGradients/LinearGradients";
import FormBackground from "../components/Background/FormBackground";

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
            <LinearGradients>
                <Logo/>
                <FormBackground>
                    <Title>
                        Création{"\n"}de compte
                    </Title>
                    <Form styles={styles} register={register} validate={validate}/>
                    <SecondaryButton styles={styles} handlePress={() => navigation.navigate('Login')}>Se connecter</SecondaryButton>
                    <ErrorMessage styles={styles}>{errorMessage}</ErrorMessage>
                </FormBackground>
            </LinearGradients>
        </View>
    )
}