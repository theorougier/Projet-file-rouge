import React from 'react'
import * as SecureStore from "expo-secure-store";
import {useNavigation} from "@react-navigation/core";

export default function useGenericFunction() {
    async function getValueFor(key) {
        let result = await SecureStore.getItemAsync(key);
        if (result) {
            return true
        } else {
            return false
        }
    }

    return {
        getValueFor
    }
}