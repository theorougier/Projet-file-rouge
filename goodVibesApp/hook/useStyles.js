import React from 'react'
import {StyleSheet} from "react-native";
import EStyleSheet from 'react-native-extended-stylesheet'


export default function useStyles() {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        containerSecondary: {
            width: '100%',
            padding: 18,
            flexDirection: 'column',
            height: '100%'
        },
        textCourant: {
            color: 'white',
            textAlign: 'center'
        },
        containerLinear: {
            flex: 1,
            position: 'relative',
            alignItems: 'center',
            justifyContent: 'center',
        },
        image: {
            margin: 40,
        },
        flexRowContainer: {
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        title: {
            fontSize: 24,
            fontWeight: '700',
            color: 'white',
            marginTop: 25,
            marginBottom: 25,
            textAlign: 'center'
        },
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            borderColor: 'white',
            color: 'rgba(199, 199, 199, 1)',
            padding: 10,
            width: 200,
            backgroundColor: 'white',
            borderRadius: 15,
        },
        btn: {
            backgroundColor: 'transparent',
            color: 'white',
            textAlign: "center",
            textTransform: 'capitalize',
            fontWeight: '600'
        },
        btnSecondary: {
            color: 'white',
            fontWeight: '600'
        },
        containerBtn: {
            borderWidth: 2,
            padding: 10,
            borderColor: 'white',
            margin: 12,
            borderRadius: 10,
        },
        containerBtnBackgroundWhite: {
            borderWidth: 2,
            padding: 10,
            borderColor: 'white',
            backgroundColor: 'white',
            margin: 12,
            width: 200,
            borderRadius: 10,
        },
        titleH1: {
            fontSize: 58,
            padding: 20,
            color: 'white',
            marginTop: 20,
            fontFamily: 'GentyDemo-Regular'
        },
        errorMessage: {
            fontSize: 12,
            color: 'red'
        },
        imageRandom: {
            width: 125,
            height: 125,
            margin: 10,
            borderRadius: 20,
        },
        imageRandomSelected: {
            width: 250,
            height: 250,
            borderRadius: 20,
            opacity: 0.2,
        },
        arrow: {
            width: 20,
            height: 10
        },
        containerForm: {
            backgroundColor: "rgba(233, 229, 229, 0.4)",
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            width: '70%'
        },
        bulletPoints: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
        },
        bulletActive: {
            width: 20,
            height: 20,
            borderColor: 'white',
            borderWidth: 10,
            borderStyle: 'solid',
            borderRadius: 10,
            margin: 5
        },
        bullet: {
            width: 20,
            height: 20,
            borderColor: 'white',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 10,
            margin: 5
        },
        textCourantFact: {
            fontSize: 20,
            textAlign: 'center',
            color: 'white',

        },
        containerSecondaryFact: {
            width: '100%',
            padding: 18,
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between'
        },
        factContainer: {
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height:'75%'
        }
    })

    return {
        styles
    }
}