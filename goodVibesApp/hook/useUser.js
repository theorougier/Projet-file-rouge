import React, {useEffect, useState} from 'react'
import * as SecureStore from "expo-secure-store";

export default function useUser() {
    const [userMail, setUserMail] = useState()
    const [userPassword, setUserPassword] = useState()
    const [userName, setUserName] = useState()

    const getUser = async () => {
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')
        const response = await fetch(`http://localhost:5000/api/user/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        const json = await response.json()
        setUserMail(json.email)
        setUserPassword(json.password)
        setUserName(json.name)
    }

    useEffect(() => {
        getUser()
    }, [])

    return {userMail, userPassword, userName}
}