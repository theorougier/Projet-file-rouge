import React, {useState} from 'react'
import Pressable from "react-native";
import useStyles from "../../hook/useStyles";

export default function CheckBox() {
    const [checked, onChange] = useState(false);
    const {styles} = useStyles()

    const onCheckmarkPress = () => {
        onChange(!checked);
    }

    return (
        <Pressable
            style={[styles.checkboxBase, checked && styles.checkboxChecked]}
            onPress={onCheckmarkPress}>
        </Pressable>
    )
}