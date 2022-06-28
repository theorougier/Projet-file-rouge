import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Text} from "react-native";
import {useForm, Controller} from "react-hook-form";
import axios from 'axios';
import 'localstorage-polyfill';
import * as SecureStore from 'expo-secure-store';


export default function Form({action, submit}) {
    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'email': '',
            'password': ''
        }
    });

    const [email, setEmail] = React.useState(null)
    const [password, setPassword] = React.useState(null)

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
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                    <TouchableOpacity onPress={handleSubmit(submit)}>
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
                                value={values}
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
                                value={values}
                                style={styles.input}
                                placeholder={'Mot de passe'}
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                </>
            }
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
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
    }
});

