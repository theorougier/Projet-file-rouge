import React, {useState} from 'react'
import useApi from "../../hook/useApi";
import {Button, Text, TouchableOpacity, Image} from "react-native";
import useStyles from "../../hook/useStyles";
import PrimaryButton from "../Button/PrimaryButton";
import LinearGradients from "../LinearGradients/LinearGradients";
import Title from "../Title/Title";
import Logo from "../Logo/Logo";
import CustomButton from "../Button/CustomButton";

export default function FormPreferences() {
    const {apiThemes, isSelected, selectPref, postPref} = useApi()
    const {styles} = useStyles()

    return (
        <LinearGradients>
            <Logo/>
            <Title>1/2{'\n'} Pour que nous puissions vous proposer un contenu adapté, dites nous les sujets que vous aimez </Title>
            {
                apiThemes.map((theme, index) => {
                    return (
                        <CustomButton key={theme} handlePress={() => selectPref(theme)} style={isSelected? styles.containerBtnBackgroundWhite : styles.containerBtn}>{theme}</CustomButton>
                    )
                })
            }
            <PrimaryButton handlePress={() => postPref()}>Suivant <Image style={styles.arrow}
                                                                         source={require('../../assets/img/arrowright.png')}/></PrimaryButton>
        </LinearGradients>
    )
}