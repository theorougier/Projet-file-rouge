import React, {useState} from 'react'

export default function useValidation() {
    const [email, setEmail] = useState()
    const [errorValidation, setErrorValidation] = useState()

    function validate(text) {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setErrorValidation("Email invalide")
            setEmail(text)
            return false;
        } else {
            setErrorValidation(null)
            setEmail(text)
            return email
        }
    }

    return {
        email,
        errorValidation,
        setErrorValidation,
        setEmail,
        validate,
    }
}