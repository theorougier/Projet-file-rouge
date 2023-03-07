import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";
import {Controller, useForm} from "react-hook-form";
import 'localstorage-polyfill';
import PrimaryButton from "../Button/PrimaryButton";
import useUser from "../../hook/useUser";


export default function FormPersonalInformation({action, submit, styles, register}) {

    const {userName} = useUser()

    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {
            'name': userName,
        }
    });

    return (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
            <>
                <Controller
                    control={control}
                    name={'name'}
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            placeholder={'Prenom'}
                            style={styles.input}
                            value={value}
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