import React, {useState} from 'react'
import useApi from "../../hook/useApi";
import {Button, Text, TouchableOpacity, Image} from "react-native";
import useStyles from "../../hook/useStyles";

export default function FormPreferences({selectPref, postPref}) {
    const {apiThemes, preference, imageTheme} = useApi()
    const {styles} = useStyles()

    return (
        <>
            {
                apiThemes.map((theme, index) => {
                    return (
                        <TouchableOpacity key={theme} onPress={() => selectPref(theme)}>
                            <Image source={{uri: imageTheme[index]}} style={styles.imageRandom}/>
                        </TouchableOpacity>
                    )
                })
            }
            <TouchableOpacity onPress={() => postPref()}>
                <Text>Push Preferences</Text>
            </TouchableOpacity>
        </>
    )
}