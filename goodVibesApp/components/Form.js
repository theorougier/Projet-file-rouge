import React from 'react';
import {SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Text} from "react-native";
import {useForm, Controller} from "react-hook-form";

export default function Form({action}) {
    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'email': '',
            'password': ''
        }
    });

    function submit(data) {
        console.log(data)
    }

    return (
        <SafeAreaView>
            {action === 'login' ?
                <>
                    <Controller
                        control={control}
                        name={'email'}
                        render={({onChange, value}) => (
                            <TextInput
                                placeholder={'Email'}
                                style={styles.input}
                                value={value}
                                onChangeText={console.log(value)}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={'password'}
                        render={({onChange, value}) => (
                            <TextInput
                                style={styles.input}
                                value={value}
                                placeholder={'Mot de passe'}
                                onChangeText={value => onChange(value)}
                            />
                        )}
                    />
                    <TouchableOpacity onPress={submit}>
                        <Text>Submit</Text>
                    </TouchableOpacity>
                </>

                :
                <>
                    <Controller
                        control={control}
                        name={'email'}
                        render={({onChangeText, values}) => (
                            <TextInput
                                value={values}
                                placeholder={'Email'}
                                style={styles.input}
                                onChangeText={value => onChangeText(value)}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name={'password'}
                        render={({onChangeText, values}) => (
                            <TextInput
                                value={values}
                                style={styles.input}
                                placeholder={'Mot de passe'}
                                onChangeText={value => onChangeText(value)}
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
});

