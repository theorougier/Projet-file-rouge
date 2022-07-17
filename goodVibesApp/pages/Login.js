import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Form from "../components/Form/Form";
import Logo from "../components/Logo/Logo";
import Title from "../components/Title/Title";
import useStyles from "../hook/useStyles";
import useLogin from "../hook/useLogin";
import useLoginPage from "../hook/pages/useLoginPage";
import SecondaryButton from "../components/Button/SecondaryButton";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import LinearGradients from "../components/LinearGradients/LinearGradients";
import FormBackground from "../components/Background/FormBackground";


export default function Login({validate}) {
    const {navigation, errorMessage, submit} = useLogin()
    const {} = useLoginPage()
    const {styles} = useStyles()

    return (
        <View style={styles.container}>
            <LinearGradients>
                <Logo/>
                <FormBackground>
                    <Title>
                        Se connecter
                    </Title>
                    <Form action={'login'} submit={submit} styles={styles} validate={validate}/>
                    <SecondaryButton handlePress={() => navigation.navigate('Register')}>S'enregistrer</SecondaryButton>
                    <ErrorMessage styles={styles}>{errorMessage}</ErrorMessage>
                </FormBackground>
            </LinearGradients>
        </View>
    );
}
