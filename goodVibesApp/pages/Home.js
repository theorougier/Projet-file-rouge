import React from 'react';
import {Image, TouchableOpacity, View, Text} from "react-native";
import Logo from "../components/Logo/Logo";
import useApi from "../hook/useApi";
import LinearGradient from 'react-native-linear-gradient'
import FormPreferences from "../components/Form/FormPreferences";
import useStyles from "../hook/useStyles";
import {useNavigation} from "@react-navigation/core";
import SettingButton from "../components/Button/SettingButton";


export default function Home() {
    const {randomImage, randomFact, selectPref, postPref} = useApi()
    const {styles} = useStyles()
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.containerLinear} colors={['#FFD1D1', '#6986BE']}>
                <SettingButton handlePress={() => navigation.navigate('Options')}>
                    <Image source={require('../assets/img/settings.png')}/>
                </SettingButton>
                <Logo/>
                <FormPreferences selectPref={selectPref} postPref={postPref}/>
            </LinearGradient>
        </View>
    )
}