import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";
import {Controller, useForm} from "react-hook-form";
import 'localstorage-polyfill';
import PrimaryButton from "../Button/PrimaryButton";
import useUser from "../../hook/useUser";


export default function FormMessageParams({action, submit, styles, register}) {
    const {userMail, userPassword} = useUser()

    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'email': userMail,
            'password': userPassword
        }
    });

    console.log(userMail, userPassword)

    return (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
            <>
                <Controller
                    control={control}
                    name={'email'}
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            placeholder={'Email'}
                            value={userMail}
                            style={styles.input}
                            autoCapitalize='none'
                            placeholderTextColor={'rgba(199, 199, 199, 1)'}
                            onChangeText={value => onChange(value)}
                        />
                    )}
                />
                <Controller
                    control={control}
                    name={'password'}
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            style={styles.input}
                            placeholder={'Mot de passe'}
                            secureTextEntry={true}
                            value={userPassword}
                            autoCapitalize='none'
                            placeholderTextColor={'rgba(199, 199, 199, 1)'}
                            onChangeText={value => onChange(value)}
                        />
                    )}
                />
                <PrimaryButton handlePress={handleSubmit(submit)}>{'Modifier'}</PrimaryButton>
            </>
        </SafeAreaView>
    );
}