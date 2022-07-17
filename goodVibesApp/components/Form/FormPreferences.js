import React, {useState} from 'react'
import useApi from "../../hook/useApi";
import {Button, Text, TouchableOpacity, Image} from "react-native";
import useStyles from "../../hook/useStyles";
import View from "react-native-web/dist/exports/View";
import PrimaryButton from "../Button/PrimaryButton";

export default function FormPreferences({selectPref, postPref}) {
    const {apiThemes, preference, imageTheme} = useApi()
    const {styles} = useStyles()

    return (
        <>
            <Text style={styles.containerImage}>
                {
                    apiThemes.map((theme, index) => {
                        return (
                            <TouchableOpacity key={theme} onPress={() => selectPref(theme)}>
                                <Image source={{uri: imageTheme[index]}} style={styles.imageRandom}/>
                            </TouchableOpacity>
                        )
                    })
                }
            </Text>
            <PrimaryButton handlePress={() => postPref()}>Valider mes préférences</PrimaryButton>
        </>
    )
}