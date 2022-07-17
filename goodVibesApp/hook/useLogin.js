import React, {useEffect, useState} from 'react'
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import useValidation from "./useValidation";
import {useNavigation} from "@react-navigation/core";

export default function useLogin() {
    const [errorMessage, setErrorMessage] = useState(null)
    const navigation = useNavigation();


    const {
        errorValidation,
        validate,
    } = useValidation()

    function LogOut() {
        SecureStore.deleteItemAsync('token').then(
            navigation.navigate('Login')
        )
    }

    async function submit(data) {
        if (data.email === '' && data.password === '') {
            setErrorMessage("Vous n'avez renseigner aucune informations")
        } else if (data.password === '') {
            setErrorMessage("Le champ mot de passe n'est pas renseigné")
        } else if (data.email === '') {
            setErrorMessage("Le champ mail n'est pas renseigné ")
        } else {
            axios.post("http://localhost:5000/api/auth", {
                email: data.email,
                password: data.password
            }).then(async function (resp) {
                await SecureStore.setItemAsync('token', resp.data.token)
                await SecureStore.setItemAsync('userId', resp.data.id)
                navigation.navigate('Home')
            }).catch(function (error) {
                setErrorMessage('Identifiant ou mot de passe invalide')
            })
        }
    }

    async function register(data) {
        if (data.email === '' && data.password === '') {
            setErrorMessage("Vous n'avez reneigner aucune informations")
        } else if (data.password === '') {
            setErrorMessage("Le champ mot de passe n'est pas renseigné")
        } else if (data.email === '') {
            setErrorMessage("Le champ mail n'est pas renseigné ")
        } else if (errorValidation === "Email invalide") {
            setErrorMessage(errorValidation)
        } else {
            axios.post("http://localhost:5000/api/user", {
                email: data.email,
                password: data.password,
                isAdmin: false,
                preferences: {}
            }).then(async function (resp) {
                navigation.navigate('Login')
            }).catch(function (error) {
                setErrorMessage('Email déjà utilisé')
            })
        }
    }

    return {
        errorValidation,
        errorMessage,
        validate,
        navigation,
        LogOut,
        submit,
        register,
    }
}