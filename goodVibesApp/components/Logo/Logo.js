import React from 'react'
import {Text} from "react-native";
import useStyles from "../../hook/useStyles";

export default function Logo() {
    const {styles} = useStyles()
    return (
        <Text style={styles.titleH1}>Good{"\n"}Vibes</Text>
    )
}