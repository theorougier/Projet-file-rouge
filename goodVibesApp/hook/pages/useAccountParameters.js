import React, {useState} from 'react'
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function useAccountParameters() {
    const [errorMessageAccountParameter, setErrorMessageAccountParameter] = useState(null)
    const [errorMessagePersonnalParameter, setErrorMessagePersonnalParameter] = useState(null)

    const submitAccountParameter = async (data) => {
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')
        axios.put(`http://localhost:5000/api/user/${id}`, {
                email: data.email,
                password: data.password
            },
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    const submitPersonalParameter = async (data) => {
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')
        axios.put(`http://localhost:5000/api/user/${id}`, {
                name: data.name,
            },
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
    }

    return {
        errorMessageAccountParameter,
        errorMessagePersonnalParameter,
        submitAccountParameter,
        submitPersonalParameter,
    }
}