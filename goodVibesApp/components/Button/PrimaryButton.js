import React from 'react'
import {Text, TouchableOpacity} from "react-native";
import useStyles from "../../hook/useStyles";

export default function PrimaryButton({handlePress, children}) {
    const {styles} = useStyles()
    return (
        <TouchableOpacity onPress={handlePress} style={styles.containerBtn}>
            <Text style={styles.btn}>{children}</Text>
        </TouchableOpacity>
    )
}