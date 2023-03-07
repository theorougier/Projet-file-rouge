import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import useStyles from "../hook/useStyles";
import LinearGradients from '../components/LinearGradients/LinearGradients';
import HomeScreenImage from "../components/HomeScreen/HomeScreenImage";
import HomeScreenFact from "../components/HomeScreen/HomeScreenFact";

export default function Home() {
    const {styles} = useStyles()
    const [switchPage, setSwitchPage] = useState(false)

    return (
        <View style={styles.container}>
            <LinearGradients>
                <View style={styles.containerSecondaryFact}>
                    {
                        switchPage ?
                            <HomeScreenFact styles={styles}/>
                            :
                            <HomeScreenImage styles={styles}/>
                    }
                    <View style={styles.bulletPoints}>
                        <TouchableOpacity onPress={() => setSwitchPage(prevState => !prevState)}>
                            <Text style={switchPage ? styles.bullet : styles.bulletActive}></Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSwitchPage(prevState => !prevState)}>
                            <Text style={switchPage ? styles.bulletActive : styles.bullet}></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradients>
        </View>
    )
}