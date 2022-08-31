import React from 'react'
import {Image, Text, TouchableOpacity, View} from "react-native";
import Logo from "../Logo/Logo";
import SettingButton from "../Button/SettingButton";
import Title from "../Title/Title";
import DownloadButton from "../Button/DownloadButton";
import PrimaryButton from "../Button/PrimaryButton";
import {useNavigation} from "@react-navigation/core";
import useApi from "../../hook/useApi";
import useDownload from "../../hook/useDownload";

export default function HomeScreenImage({styles}) {
    const navigation = useNavigation();
    const {randomImage, isImageLoading, saveFav, isAlreadyFav, imageRandom} = useApi()
    const {SaveToPhone} = useDownload()
    return (
        <View>
            <View style={styles.flexRowContainer}>
                <Logo/>
                <SettingButton handlePress={() => navigation.navigate('Options')}>
                    <Image source={require('../../assets/img/profile.png')}/>
                </SettingButton>
            </View>
            <View style={styles.flexRowContainer}>
                <Text style={{width: 30, height: 30}}> </Text>
                <Title style={styles.title}>Image</Title>
                <DownloadButton
                    handlePress={() => SaveToPhone(randomImage)}>
                    <Image style={{width: 30, height: 30}} source={require('../../assets/img/download.png')}/>
                </DownloadButton>
            </View>
            {isImageLoading ?
                <Text style={{width: '100%', height: 400}}>Loading...</Text>
                :
                <Image source={{uri: randomImage}} style={{width: '100%', height: 400, borderRadius: 10}}/>
            }
            <View>
                <PrimaryButton
                    handlePress={() => saveFav()}>
                    <Text>{isAlreadyFav ? 'Retirer des favoris' : 'Ajouter aux favoris'}</Text>
                </PrimaryButton>
                <PrimaryButton
                    handlePress={() => imageRandom()}>
                    <Text>{'Nouvelle image'}</Text>
                </PrimaryButton>
            </View>
        </View>
    )
}