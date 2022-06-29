import React from 'react'
import {StyleSheet} from "react-native";

export default function useStyles() {
    const styles = StyleSheet.create({
        container: {
            paddingTop: 100,
            flex: 1,
            backgroundColor: 'lightpink',
            alignItems: 'center',
            position: 'relative',
        },
        image: {
            margin: 40,
        },
        optionsBtn: {
            position: 'absolute',
            top: 70,
            right: 15,
        },
        title: {
            fontSize: 24,
            fontWeight: '700',
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 300,
        },
        btn: {
            backgroundColor: 'pink',
            padding: 10,
            width: 200,
            textAlign: "center",
            margin: 12,
        },
        btnSecondary: {
            padding: 10,
            width: 200,
            textAlign: "center",
            margin: 12,
        },
        containerBtn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }
    })

    return {
        styles
    }
}