import React from 'react'
import {View, Text, Image} from "react-native";
import Logo from "../Logo/Logo";
import SettingButton from "../Button/SettingButton";
import Title from "../Title/Title";
import useApi from "../../hook/useApi";
import useLogin from "../../hook/useLogin";

export default function HomeScreenFact({styles}) {
    const {randomFact, randomJokes, isFactLoading} = useApi()
    const {navigation} = useLogin()

    return (
        <View>
            <View style={styles.flexRowContainer}>
                <Logo/>
                <SettingButton handlePress={() => navigation.navigate('Options')}>
                    <Image source={require('../../assets/img/profile.png')}/>
                </SettingButton>
            </View>
            {isFactLoading ?
                <Text>Loading...</Text>
                :
                <View style={styles.factContainer}>
                    <View>
                        <Title style={styles.title}>Le saviez vous?</Title>
                        <Text style={styles.textCourantFact}>{randomFact}</Text>
                    </View>
                    <View>
                        <Title style={styles.title}>Blague</Title>
                        <Text style={styles.textCourantFact}>{randomJokes}</Text>
                    </View>
                </View>
            }
        </View>
    )
}