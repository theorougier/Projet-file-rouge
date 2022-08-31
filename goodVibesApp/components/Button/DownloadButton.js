import React from 'react'
import {Image, TouchableOpacity} from "react-native";
import useStyles from "../../hook/useStyles";

export default function DownloadButton({children, handlePress}) {
    const {styles} = useStyles()

    return (
        <TouchableOpacity onPress={handlePress} style={styles.downloadBtn}>
            {children}
        </TouchableOpacity>
    )
}