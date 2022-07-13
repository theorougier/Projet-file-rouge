import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";
import {Controller, useForm} from "react-hook-form";
import 'localstorage-polyfill';


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
                    <TouchableOpacity onPress={handleSubmit(submit)} style={styles.containerBtn}>
                        <Text style={styles.btn}>Connection</Text>
                    </TouchableOpacity>
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
                    <TouchableOpacity onPress={handleSubmit(register)} style={styles.containerBtn}>
                        <Text style={styles.btn}>S'enregistrer</Text>
                    </TouchableOpacity>
                </>
            }
        </SafeAreaView>
    );
}

