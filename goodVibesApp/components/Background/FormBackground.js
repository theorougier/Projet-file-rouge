import React from 'react'
import {View} from "react-native";
import LinearGradients from "../LinearGradients/LinearGradients";
import useStyles from "../../hook/useStyles";

export default function FormBackground({children}) {
    const {styles} = useStyles()

    return (
        <View style={styles.containerForm}>
            {children}
        </View>
    )
}