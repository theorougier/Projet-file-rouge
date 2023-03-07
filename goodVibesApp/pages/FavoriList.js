import React from 'react'
import useFavoriList from "../hook/pages/useFavoriList";
import LinearGradients from "../components/LinearGradients/LinearGradients";
import {Image, Text, View, TouchableOpacity, ScrollView} from "react-native";
import Logo from "../components/Logo/Logo";
import SettingButton from "../components/Button/SettingButton";
import Title from "../components/Title/Title";
import useStyles from "../hook/useStyles";
import useLogin from "../hook/useLogin";
import useDownload from "../hook/useDownload";


export default function FavoriList() {
    const {listFav, isListFavLoading, removeFav} = useFavoriList()
    const {styles} = useStyles()
    const {navigation} = useLogin()
    const {SaveToPhone} = useDownload()

    return (
        <View style={styles.container}>
            <LinearGradients>
                <View style={styles.containerSecondary}>
                    <View style={styles.flexRowContainer}>
                        <Logo/>
                        <SettingButton handlePress={() => navigation.navigate('Options')}>
                            <Image source={require('../assets/img/arrowLeft-2.png')}/>
                        </SettingButton>
                    </View>
                    <Title>Mes Favoris</Title>
                    <ScrollView>
                        {
                            isListFavLoading ?
                                <Text style={{textAlign:'center', height: 300, display:'flex', alignItems:'center', color:'white'}}>Loading...</Text>
                                :
                                listFav.map(element => (
                                    <View key={Math.random(0) * 99999} style={{width: '100%'}}>
                                        <View style={{width: '100%', flexDirection:'row', display:'flex', justifyContent:'space-between'}}>
                                            <TouchableOpacity
                                                onPress={() => SaveToPhone(element)} style={{width: 30, height: 30}}>
                                                <Image style={{width: 30, height: 30}}
                                                       source={require('../assets/img/download.png')}/>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                onPress={() => removeFav(element)} style={{width: 30, height: 30}}>
                                                <Image style={{width: 30, height: 30}}
                                                       source={require('../assets/img/cross-free-icon-font.png')}/>
                                            </TouchableOpacity>
                                        </View>
                                        <Text> </Text>
                                        <Image source={{uri: element}}
                                               style={{width: '100%', height: 300}}/>
                                        <Text> </Text>
                                    </View>
                                ))
                        }
                    </ScrollView>
                </View>
            </LinearGradients>
        </View>
    )
}