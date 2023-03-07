import React from 'react';
import {SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";
import {Controller, useForm} from "react-hook-form";
import 'localstorage-polyfill';
import PrimaryButton from "../Button/PrimaryButton";


export default function FormMessageParams({action, submit, styles, register}) {

    const {control, handleSubmit, errors, reset} = useForm({
        defaultValues: {

        }
    });

    return (
        <SafeAreaView style={{justifyContent: 'center', alignItems: 'center'}}>
            <>
                <Controller
                    control={control}
                    name={'frequence'}
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            placeholder={'Fréquence'}
                            style={styles.input}
                            value={30}
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