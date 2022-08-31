import React, {useEffect, useState} from 'react'
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import {useNavigation} from "@react-navigation/core";
import customFactData from '../factRepertory.json'

export default function useApi() {
    const [randomImage, setRandomImage] = useState()
    const [randomFact, setRandomFact] = useState()
    const [randomJokes, setRandomJokes] = useState()
    const [preference, setPreferences] = useState()
    const [isSelected, setSelected] = useState()
    const [checkPreferences, setCheckPreferences] = useState()
    const [isLoading, setLoading] = useState(true);
    const [isImageLoading, setImageLoading] = useState(true);
    const [isFactLoading, setFactLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState()
    const [isAlreadyFav, setAlreadyFav] = useState(false)
    const navigation = useNavigation()
    const apiThemes =
        [
            'cats',
            'dogs',
        ]

    const factRandom = async () => {
        try {
            const response = await customFactData
            setRandomFact(response.facts[Math.floor(Math.random(0) * response.facts.length)])
            setRandomJokes(response.jokes[Math.floor(Math.random(0) * response.jokes.length)])
        } catch (error) {
            console.log(error)
        } finally {
            setFactLoading(false)
        }
    }

    const imageRandom = async () => {
        try {
            setAlreadyFav(false)
            let token = await SecureStore.getItemAsync('token')
            let id = await SecureStore.getItemAsync('userId')
            let favList = []
            const responseRandomise = await fetch(`http://localhost:5000/api/user/${id}`,
                {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            const jsonRand = await responseRandomise.json()
            const preferencesCategories = await jsonRand.preferences
            const result = Object.values(preferencesCategories)[Math.floor(Math.random(0) * Object.keys(preferencesCategories).length)]

            await axios.get(`http://localhost:5000/api/user/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then(resp => {
                favList = resp.data.fav
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

            if (result === 'cats') {
                const response = await fetch('https://api.thecatapi.com/v1/images/search', {
                    method: 'GET',
                    headers: {'x-api-key': 'live_NXN1mQhy1JUZ8xwFDeMTV1R0wEkGF4nkpuQlEChOZsbFZa78k6ozsjFHPx4Q3ekl'}
                })
                const json = await response.json()
                setCurrentImage(json[0].id)
                return setRandomImage(json[0].url)
            } else if (result === 'dogs') {
                const response = await fetch('https://api.thedogapi.com/v1/images/search', {
                    method: 'GET',
                    headers: {'x-api-key': 'live_h0zUGJy8YhcaZR70ddjRGaos9ZeSag7CZv7p39l1zgClmnXFyqaSnNPrYTHgijxv'}
                })
                const json = await response.json()
                setCurrentImage(json[0].id)
                return setRandomImage(json[0].url)
            }

            if (favList.includes(randomImage)) {
                setAlreadyFav(true)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setImageLoading(false)
        }
    }

    useEffect(() => {
        imageRandom()
        factRandom()
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
        setSelected(e)
        return preference
    }

    const postPref = () => {
        const preferencesConvert = Object.assign({r}, preference)
        SecureStore.getItemAsync('token').then((token) => {
            SecureStore.getItemAsync('userId').then((id) => {
                axios.put(`http://localhost:5000/api/user/${id}`, {
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
        })
    }

    const saveFav = async () => {
        let favList = []
        let token = await SecureStore.getItemAsync('token')
        let id = await SecureStore.getItemAsync('userId')
        await axios.get(`http://localhost:5000/api/user/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        ).then(resp => {
            favList = resp.data.fav
            setAlreadyFav(true)
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
        if (!favList.includes(randomImage)) {
            axios.put(`http://localhost:5000/api/user/${id}`, {
                    fav:
                        [
                            ...favList,
                            randomImage,
                        ]
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then(resp => {
                console.log(favList)
                console.log(resp.data)
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
        } else {
            axios.put(`http://localhost:5000/api/user/${id}`, {
                    fav:
                        [
                            ...favList.filter((element) => element !== randomImage)
                        ]
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            ).then(resp => {
                console.log(favList)
                console.log(resp.data)
                setAlreadyFav(false)
                console.log('déjà présent', 'élément retirer')
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
        }
    }


    return {
        randomImage,
        randomFact,
        randomJokes,
        apiThemes,
        preference,
        isSelected,
        isLoading,
        isImageLoading,
        isFactLoading,
        setCheckPreferences,
        checkPreferences,
        currentImage,
        setRandomImage,
        setRandomFact,
        isAlreadyFav,
        saveFav,
        imageRandom,
        selectPref,
        postPref
    }
}