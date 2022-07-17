import React, {useEffect} from 'react'
import useGenericFunction from "../useGenericFunction";
import {useNavigation} from "@react-navigation/core";

export default function useLoginPage() {
    const {getValueFor} = useGenericFunction()
    const navigation = useNavigation();

    useEffect(() => {
            getValueFor('token').then((resp) => resp ?
                navigation.navigate('Home') : navigation.navigate('Login')
            )
        }, []
    )

    return {}
}