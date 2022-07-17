import React from 'react'
import {Text, TouchableOpacity} from "react-native";
import useStyles from "../../hook/useStyles";

export default function PrimaryButton({handlePress, children, rest}) {
    const {styles} = useStyles()
    return (
        <TouchableOpacity {...rest} onPress={handlePress} style={styles.containerBtn}>
            <Text style={styles.btn}>{children}</Text>
        </TouchableOpacity>
    )
}