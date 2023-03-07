import React from 'react'
import {View} from "react-native";
import useStyles from "../../hook/useStyles";

export default function FormBackground({children}) {
    const {styles} = useStyles()

    return (
        <View style={styles.containerForm}>
            {children}
        </View>
    )
}