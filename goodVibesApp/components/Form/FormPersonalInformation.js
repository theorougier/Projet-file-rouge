import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";
import {Controller, useForm} from "react-hook-form";
import 'localstorage-polyfill';
import PrimaryButton from "../Button/PrimaryButton";


export default function FormPersonalInformation({action, submit, styles, register}) {

    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'email': '',
            'password': ''
        }
    });

    return (
        <SafeAreaView style={{justifyContent: 'center', alignItems:'center'}}>
                <>
                    <Controller
                        control={control}
                        name={'email'}
                        render={({field: {onChange, value}}) => (
                            <TextInput
                                placeholder={'Email'}
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
                                autoCapitalize='none'
                                placeholderTextColor={'rgba(199, 199, 199, 1)'}
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                    <PrimaryButton handlePress={handleSubmit(submit)}>Connection</PrimaryButton>
                </>
            }
        </SafeAreaView>
    );
}