import React from 'react'
import {Text} from "react-native";
import useStyles from "../../hook/useStyles";

export default function Title({children}) {
    const {styles} = useStyles()
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    )
}