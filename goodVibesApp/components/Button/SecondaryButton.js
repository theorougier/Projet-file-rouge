import React from 'react'
import {Image, Text, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import useStyles from "../../hook/useStyles";

export default function SecondaryButton({rest, handlePress, children}) {
    const {styles} = useStyles()

    return (
        <TouchableOpacity onPress={handlePress} style={styles.containerBtn}>
            <Text style={styles.btnSecondary}>{children}</Text>
        </TouchableOpacity>
    )
}