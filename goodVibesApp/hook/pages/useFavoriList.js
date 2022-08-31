import React, {useCallback, useEffect, useState} from 'react'
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function useFavoriList() {
    const [listFav, setListFav] = useState()
    const [isListFavLoading, setListFavLoading] = useState(true)

    const getAllFav = async () => {
        try {
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
            setListFav(json.fav)
        } catch (error) {
            console.log(error)
        } finally {
            setListFavLoading(false)
        }
    }

    const removeFav = async (imageToRemove) => {
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
        await axios.put(`http://localhost:5000/api/user/${id}`, {
                fav:
                    [
                        ...favList.filter((element) => element !== imageToRemove)
                    ]
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        ).then(() => {
            getAllFav()
        })
    }

    useEffect(() => {
        getAllFav()
    }, [])

    return {
        listFav,
        isListFavLoading,
        removeFav,
    }
}