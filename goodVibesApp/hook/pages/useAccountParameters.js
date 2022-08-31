import React from 'react'
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function useAccountParameters() {
    const [errorMessageAccountParameter, setErrorMessageAccountParameter] = useState(null)

    const submitAccountParameter = async (data) => {
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')

        if (data.email === '' && data.password === '') {
            setErrorMessage("Vous n'avez renseigner aucune informations")
        } else if (data.password === '') {
            setErrorMessage("Le champ mot de passe n'est pas renseigné")
        } else if (data.email === '') {
            setErrorMessage("Le champ mail n'est pas renseigné ")
        } else {
            axios.put(`http://localhost:5000/api/user/${id}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
        }
    }
    return {
        errorMessageAccountParameter,
        submitAccountParameter,
    }
}