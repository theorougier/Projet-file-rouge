import React from 'react'
import {StyleSheet} from "react-native";

export default function useStyles() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            position: 'relative',
        },
        textCourant: {
          color: 'white',
          textAlign: 'center'
        },
        containerLinear: {
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center'
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
            color: 'white',
            marginTop: 25,
            marginBottom: 25
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderColor: 'white',
            color: 'white',
            padding: 10,
            width: 300,
        },
        btn: {
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: 'white',
            color: 'white',
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
            color: 'white'
        },
        containerBtn: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
        titleH1: {
            fontSize: 72,
            padding: 20,
            textAlign: 'center',
            color: '#6986BE',
            fontFamily: 'GentyDemo-Regular'
        },
        errorMessage: {
            fontSize: 12,
            color: 'red'
        },
        imageRandom: {
            width: 250,
            height: 250,
            borderRadius: 20,
        },
        imageRandomSelected: {
            width: 250,
            height: 250,
            borderRadius: 20,
            opacity: 0.2,
        }
    })

    return {
        styles
    }
}