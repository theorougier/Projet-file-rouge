import React, {useState} from 'react'
import useApi from "../../hook/useApi";
import {Button, Text, TouchableOpacity, Image, View} from "react-native";
import useStyles from "../../hook/useStyles";
import PrimaryButton from "../Button/PrimaryButton";
import LinearGradients from "../LinearGradients/LinearGradients";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import CustomButton from "../Button/CustomButton";

export default function FormPreferences() {
    const {apiThemes, selectedElement, selectPref, postPref} = useApi()
    const {styles} = useStyles()
    return (
        <LinearGradients>
            <Logo/>
            <Title>Pour que nous puissions vous proposer un contenu adapté, dites nous les sujets que vous
                aimez </Title>
            <Title>Liste des Thèmes</Title>
            {
                apiThemes.map((theme) => {
                    return (
                        <CustomButton key={theme} handlePress={() => selectPref(theme)}
                                      style={styles.containerBtn}>{theme}</CustomButton>
                    )
                })
            }
            <Title>Vos Thèmes</Title>
            {
                selectedElement.map((element) => {
                    return (
                        <Text key={element} style={styles.containerBtn}>{element}</Text>
                    )
                })
            }
            <PrimaryButton handlePress={() => postPref()}>Suivant <Image style={styles.arrow}
                                                                         source={require('../../assets/img/arrowright-2.png')}/></PrimaryButton>
        </LinearGradients>
    )
}