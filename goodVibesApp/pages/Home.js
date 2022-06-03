import React from 'react';
import {Text, View, Button} from "react-native";

export default function Home({navigation}) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}