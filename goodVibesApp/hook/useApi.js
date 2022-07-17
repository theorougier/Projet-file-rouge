import React, {useEffect, useState} from 'react'
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {useNavigation} from "@react-navigation/core";

export default function useApi() {
    const [randomImage, setRandomImage] = useState()
    const [randomFact, setRandomFact] = useState()
    const [preference, setPreferences] = useState([])
    const navigation = useNavigation();

    useEffect(()=> {

    }, [])

    const apiThemes =
        [
            'cats',
            'dogs',
        ]

    const imageTheme = [
        'https://i-mom.unimedias.fr/2022/03/14/chat.jpg?auto=format,compress&cs=tinysrgb',
        'https://cdn.futura-sciences.com/buildsv6/images/wide1920/b/c/5/bc59613aac_50186179_age-chien.jpg',
    ]


    useEffect(() => {
        axios.get('https://api.api-ninjas.com/v1/facts?limit=1', {
            headers: {'X-Api-Key': '10Dcsd84JCi8KfPuGm4Zfg==AFqRxwfEBg4pzVVV'},
        }).then(function (resp) {
            return setRandomFact(resp.data[0].fact)
        })
    }, [])

    const selectPref = (e) => {
        if (preference.find((element) => element === e)) {
            const index = preference.indexOf(e);
            if (index > -1) { // only splice array when item is found
                preference.splice(index, 1); // 2nd parameter means remove one item only
            }
        } else {
            preference.push(e)
        }
        console.log(preference)
        return preference
    }

    const postPref = () => {
        const preferencesConvert = Object.assign({}, preference)
        SecureStore.getItemAsync('token').then((token) => {
            axios.put('http://localhost:5000/api/user/62cea955a21c760dc81838d9', {
                    preferences: preferencesConvert
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then(resp => {
                navigation.navigate('Home')
            }).catch(function (error) {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            });
        })
    }

    return {
        randomImage,
        randomFact,
        apiThemes,
        preference,
        imageTheme,
        selectPref,
        postPref
    }
}