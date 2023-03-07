import React from 'react'
import useStyles from "../../hook/useStyles";
import {View} from 'react-native';


export default function LinearGradients({children}) {
    const {styles} = useStyles()

    return (
        <View style={styles.containerLinear}>
            {children}
        </View>
    )
}