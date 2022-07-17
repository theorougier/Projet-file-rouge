import React from 'react'
import {Text, TouchableOpacity} from "react-native";
import useStyles from "../../hook/useStyles";

export default function CustomButton({handlePress, children, style}) {
    const {styles} = useStyles()
    return (
        <TouchableOpacity style={style} onPress={handlePress}>
            <Text style={styles.btn}>{children}</Text>
        </TouchableOpacity>
    )
}