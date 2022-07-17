import React from 'react';
import {Image, TouchableOpacity, View, Text} from "react-native";
import Logo from "../components/Logo/Logo";
import useStyles from "../hook/useStyles";
import {useNavigation} from "@react-navigation/core";
import SettingButton from "../components/Button/SettingButton";
import LinearGradients from '../components/LinearGradients/LinearGradients';
import useApi from "../hook/useApi";

export default function Home() {
    const {styles} = useStyles()
    const navigation = useNavigation();
    const {randomImage} = useApi()

    return (
        <View style={styles.container}>
            <LinearGradients>
                <SettingButton handlePress={() => navigation.navigate('Options')}>
                    <Image source={require('../assets/img/settings.png')}/>
                </SettingButton>
                <Logo/>
                <Image source={randomImage}/>
            </LinearGradients>
        </View>
    )
}