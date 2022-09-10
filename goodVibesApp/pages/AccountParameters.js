import React from 'react'
import useAccountParameters from "../hook/pages/useAccountParameters";
import useStyles from "../hook/useStyles";
import LinearGradients from "../components/LinearGradients/LinearGradients";
import {Image, ScrollView, View, Text} from "react-native";
import Logo from "../components/Logo/Logo";
import SettingButton from "../components/Button/SettingButton";
import Title from "../components/Title/Title";
import useLogin from "../hook/useLogin";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import FormAccountsParams from "../components/Form/FormAccountsParams";
import FormPersonalInformation from "../components/Form/FormPersonalInformation";

export default function AccountParameters({validate}) {
    const {errorMessageAccountParameter, errorMessagePersonnalParameter,submitAccountParameter, submitPersonalParameter} = useAccountParameters()
    const {styles} = useStyles()
    const {navigation} = useLogin()

    return (
        <View style={styles.container}>
            <LinearGradients>
                <View style={styles.containerSecondary}>
                    <View style={styles.flexRowContainer}>
                        <Logo/>
                        <SettingButton handlePress={() => navigation.navigate('Options')}>
                            <Image source={require('../assets/img/arrowLeft.png')}/>
                        </SettingButton>
                    </View>
                    <ScrollView>
                        <View>
                            <Title>{'Paramètres de compte'}</Title>
                            <FormAccountsParams submit={submitAccountParameter} styles={styles} validate={validate}/>
                            <ErrorMessage styles={styles}>{errorMessageAccountParameter}</ErrorMessage>
                        </View>
                        <View>
                            <Title>{'Informations personnels'}</Title>
                            <FormPersonalInformation submit={submitPersonalParameter} styles={styles} validate={validate}/>
                            <ErrorMessage styles={styles}>{errorMessagePersonnalParameter}</ErrorMessage>
                        </View>
                        <View>
                            <Title>{'Paramètre de message'}</Title>
                            <Text>{'Fréquence'}</Text>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradients>
        </View>
    )
}