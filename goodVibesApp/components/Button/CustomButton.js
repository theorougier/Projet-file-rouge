import React from 'react'
import {Image, TouchableOpacity} from "react-native";

export default function CustomButton({rest}) {
    return (
        <TouchableOpacity {...rest}>
            <Image source={require('../assets/img/settings.png')}/>
        </TouchableOpacity>
    )
}