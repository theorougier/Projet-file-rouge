import React from 'react';
import {Text, View, Button, TouchableOpacity} from "react-native";

export default function Home({LogOut, userEmail}) {

    return (
        <View>
            <Text>Salut: {userEmail}</Text>
            <Button
                title="LogOut"
                onPress={LogOut}
            />
        </View>
    )
}