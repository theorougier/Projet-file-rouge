import React, {useState} from 'react'
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function useAccountParameters() {
    const [errorMessageAccountParameter, setErrorMessageAccountParameter] = useState(null)
    const [errorMessagePersonnalParameter, setErrorMessagePersonnalParameter] = useState(null)

    const submitAccountParameter = async (data) => {
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')
        axios.put(`https://cheerify.herokuapp.com/api/users/${id}`, {
                identifier: data.email,
                email: data.email,
                password: data.password
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const submitPersonalParameter = async (data) => {
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')
        axios.put(`https://cheerify.herokuapp.com/api/users/${id}`, {
                name: data.name,
                username: data.name
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const submitMessageParams = async (data) => {
    }

    return {
        errorMessageAccountParameter,
        errorMessagePersonnalParameter,
        submitAccountParameter,
        submitPersonalParameter,
        submitMessageParams,
    }
}