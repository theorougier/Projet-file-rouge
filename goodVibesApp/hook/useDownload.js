import React from 'react'
import * as FileSystem from 'expo-file-system'
import * as MediaLibrary from 'expo-media-library'

export default function useDownload() {

    const SaveToPhone = async (url) => {
        const {uri} = await FileSystem.downloadAsync(
            url,
            `${FileSystem.documentDirectory}meme.jpg`
        ).catch((e) =>
            console.log('instagram share failed', JSON.stringify(e), url)
        )

        const permission = await MediaLibrary.requestPermissionsAsync()
        if (permission.granted) {
            try {
                const asset = await MediaLibrary.createAssetAsync(uri)
                MediaLibrary.createAlbumAsync('Images', asset, false)
                    .then(() => {
                        console.log('File Saved Successfully!')
                        alert('Image Downloaded Successfully.');
                    })
                    .catch(() => {
                        console.log('Error In Saving File!')
                    })
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('Need Storage permission to save file')
        }
    }

    return {
        SaveToPhone,
    }
}