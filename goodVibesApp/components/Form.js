import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Text} from "react-native";
import {useForm, Controller} from "react-hook-form";
import axios from 'axios';
import 'localstorage-polyfill';
import * as SecureStore from 'expo-secure-store';


export default function Form({action, submit, styles}) {
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
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={'password'}
                        secureTextEntry={true}
                        render={({field: {onChange, value}}) => (
                            <TextInput
                                style={styles.input}
                                placeholder={'Mot de passe'}
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                     <TouchableOpacity onPress={handleSubmit(submit)} style={styles.containerBtn}>
                        <Text style={styles.btn}>S'enregistrer</Text>
                    </TouchableOpacity>
                </>
            }
        </SafeAreaView>
    );
}

