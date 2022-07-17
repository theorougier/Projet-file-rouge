import React from 'react'
import LinearGradient from "react-native-linear-gradient";
import useStyles from "../../hook/useStyles";


export default function LinearGradients({children}) {
    const {styles} = useStyles()

    return (
        <LinearGradient style={styles.containerLinear} colors={["#C5719E", "#CFA371"]}>
            {children}
        </LinearGradient>
    )
}