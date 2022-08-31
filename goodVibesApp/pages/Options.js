import React from 'react'
import {Button, Image, Text, TouchableOpacity, View} from "react-native";
import Logo from "../components/Logo/Logo";
import Title from "../components/Title/Title";
import useStyles from "../hook/useStyles";
import useLogin from "../hook/useLogin";
import LinearGradients from "../components/LinearGradients/LinearGradients";
import SettingButton from "../components/Button/SettingButton";
import PrimaryButton from "../components/Button/PrimaryButton";

export default function Options() {
    const {styles} = useStyles()
    const {LogOut, navigation} = useLogin()

    return (
        <View style={styles.container}>
            <LinearGradients>
                <View style={styles.containerSecondary}>
                    <View style={styles.flexRowContainer}>
                        <Logo/>
                        <SettingButton handlePress={() => navigation.navigate('Home')}>
                            <Image source={require('../assets/img/arrowLeft.png')}/>
                        </SettingButton>
                    </View>
                    <Title>Settings</Title>
                    <PrimaryButton
                        handlePress={() => navigation.navigate('PersonalInformations')}>
                        <Text>{"Paramètres de compte"}</Text>
                    </PrimaryButton>
                     <PrimaryButton
                        handlePress={() => navigation.navigate('Favori')}>
                        <Text>{"Mes Favoris"}</Text>
                    </PrimaryButton>
                    <PrimaryButton
                        handlePress={() => LogOut()}
                    >
                        <Text>{"Se déconnecter"}</Text>
                    </PrimaryButton>
                </View>
            </LinearGradients>
        </View>
    )
}