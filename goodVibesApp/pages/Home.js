import React from 'react';
import {Image, TouchableOpacity, View, Text} from "react-native";
import Logo from "../components/Logo/Logo";
import useApi from "../hook/useApi";
import LinearGradient from 'react-native-linear-gradient'
import FormPreferences from "../components/Form/FormPreferences";


export default function Home({navigation, styles}) {
    const {randomImage, randomFact, selectPref, postPref} = useApi()

    return (
        <View style={styles.container}>
            <LinearGradient style={styles.containerLinear} colors={['#FFD1D1', '#6986BE']}>
                <TouchableOpacity onPress={() => navigation.navigate('Options')} style={styles.optionsBtn}>
                    <Image source={require('../assets/img/settings.png')}/>
                </TouchableOpacity>
                <Logo/>
                {/*<Title>*/}
                {/*    Votre Images*/}
                {/*</Title>*/}
                {/*<Image source={{uri: randomImage}} style={styles.imageRandom}/>*/}
                {/*<Title>Le saviez vous?</Title>*/}
                {/*<Text style={styles.textCourant}>{randomFact}</Text>*/}
                <FormPreferences selectPref={selectPref} postPref={postPref}/>
            </LinearGradient>
        </View>
    )
}