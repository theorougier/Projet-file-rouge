import React, {useEffect, useState} from 'react'
import * as SecureStore from "expo-secure-store";
import axios from "axios";
import useValidation from "./useValidation";
import {useNavigation} from "@react-navigation/core";
import { Logs } from 'expo'


export default function useLogin() {
    const [errorMessage, setErrorMessage] = useState(null)
    const navigation = useNavigation();
    Logs.enableExpoCliLogging()

    const {
        errorValidation,
        validate,
    } = useValidation()

    const LogOut = () => {
        SecureStore.deleteItemAsync('token').then(
            navigation.navigate('Login')
        )
    }

    const checkUserPreferences = async () => {
        console.log('qlzkjdlqzjdlqizjhdlqzjdlqizjdlqzijd')
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')
        axios.get(`https://cheerify.herokuapp.com/api/users/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => {
            if (resp.data.preferences) {
                navigation.navigate('Home')
            } else {
                navigation.navigate('Preferences')
            }
        }).catch(function (error) {
            console.log(error)
        })
    }

    const submit = async (data) => {
        if (data.email === '' && data.password === '') {
            setErrorMessage("Vous n'avez renseigner aucune informations")
        } else if (data.password === '') {
            setErrorMessage("Le champ mot de passe n'est pas renseigné")
        } else if (data.email === '') {
            setErrorMessage("Le champ mail n'est pas renseigné ")
        } else {
            axios.post("https://cheerify.herokuapp.com/api/auth/local", {
                identifier: data.email,
                password: data.password
            }).then(async function (resp) {
                console.log(resp.data.jwt)
                await SecureStore.setItemAsync('token', `${resp.data.jwt}`)
                await SecureStore.setItemAsync('userId', `${resp.data.user.id}`)
                await checkUserPreferences()
            }).catch(async function (error) {
                // setErrorMessage('Identifiant ou mot de passe invalide')
                console.log(error)

            })
        }
    }

    const register = async (data) => {
        if (data.email === '' && data.password === '') {
            setErrorMessage("Vous n'avez reneigner aucune informations")
        } else if (data.password === '') {
            setErrorMessage("Le champ mot de passe n'est pas renseigné")
        } else if (data.email === '') {
            setErrorMessage("Le champ mail n'est pas renseigné ")
        } else if (errorValidation === "Email invalide") {
            setErrorMessage(errorValidation)
        } else {
            axios.post("https://cheerify.herokuapp.com/api/auth/local/register", {
                identifier: data.email,
                email: data.email,
                username: data.email,
                password: data.password,
                isAdmin: false,
                preferences: null
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