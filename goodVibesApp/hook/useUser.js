import React, {useState} from 'react'
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function useUser() {
    const [userMail, setUserMail] = useState()

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
        return setUserMail(json.email)
    }

    return {userMail}
}