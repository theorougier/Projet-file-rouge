import React from 'react'
import {Image, Text, TouchableOpacity} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import useLogin from "../../hook/useLogin";

export default function ErrorMessage({rest, children, styles}) {

    return (
       <Text style={styles.errorMessage}>{children}</Text>
    )
}