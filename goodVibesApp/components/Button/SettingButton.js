import React from 'react'
import {Image, TouchableOpacity} from "react-native";
import useStyles from "../../hook/useStyles";

export default function SettingButton({children, handlePress}) {
    const {styles} = useStyles()

    return (
        <TouchableOpacity onPress={handlePress} style={styles.optionsBtn}>
            {children}
        </TouchableOpacity>
    )
}