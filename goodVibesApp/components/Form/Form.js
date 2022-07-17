import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";
import {Controller, useForm} from "react-hook-form";
import 'localstorage-polyfill';
import PrimaryButton from "../Button/PrimaryButton";


export default function Form({action, submit, styles, register}) {

    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'email': '',
            'password': ''
        }
    });

    return (
        <SafeAreaView>
            {action === 'login' ?
                <>
                    <Controller
                        control={control}
                        name={'email'}
                        render={({field: {onChange, value}}) => (
                            <TextInput
                                placeholder={'Email'}
                                style={styles.input}
                                autoCapitalize='none'
                                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
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
                                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                    <PrimaryButton handlePress={handleSubmit(submit)}>Connection</PrimaryButton>
                </>

                :
                <>
                    <Controller
                        control={control}
                        name={'email'}
                        render={({field: {onChange, value}}) => (
                            <TextInput
                                placeholder={'Email'}
                                style={styles.input}
                                autoCapitalize='none'
                                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
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
                                autoCapitalize='none'
                                secureTextEntry={true}
                                placeholderTextColor={'rgba(255, 255, 255, 0.5)'}
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                    <PrimaryButton handlePress={handleSubmit(register)}>Connection</PrimaryButton>
                </>
            }
        </SafeAreaView>
    );
}

