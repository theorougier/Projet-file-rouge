import React, {useEffect, useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import useStyles from "../hook/useStyles";
import LinearGradients from '../components/LinearGradients/LinearGradients';
import HomeScreenImage from "../components/HomeScreen/HomeScreenImage";
import HomeScreenFact from "../components/HomeScreen/HomeScreenFact";
import * as Notifications from "expo-notifications";
import * as Device from 'expo-device';
import customNotificationsData from "../notification.json";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export default function Home() {
    const {styles} = useStyles()
    const [switchPage, setSwitchPage] = useState(false)
    const [expoPushToken, setExpoPushToken] = useState('');
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();

    useEffect(() => {
        registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

        // This listener is fired whenever a notification is received while the app is foregrounded
        notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
            setNotification(notification);
        });

        // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
        responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            Notifications.removeNotificationSubscription(notificationListener.current);
            Notifications.removeNotificationSubscription(responseListener.current);
        };
    }, []);

    return (
        <View style={styles.container}>
            <LinearGradients>
                <View style={switchPage ? styles.containerSecondaryFact : styles.containerSecondary}>
                    {
                        switchPage ?
                            <HomeScreenFact styles={styles}/>
                            :
                            <HomeScreenImage styles={styles}/>
                    }
                    <View>
                        <TouchableOpacity onPress={() => sendPushNotification()}>
                            <Text> {'Notification push'}</Text>
                        </TouchableOpacity>
                    </View>
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

const randomNotificationGeneration = () => {
    return customNotificationsData.notifications[Math.floor(Math.random(0) * customNotificationsData.notifications.length)]
}

async function sendPushNotification(expoPushToken) {
    const message = {
        to: expoPushToken,
        sound: 'default',
        title: "Ne m'oublie pas",
        body: randomNotificationGeneration(),
    };

    await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Accept-encoding': 'gzip, deflate',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Device.isDevice) {
        const {status: existingStatus} = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const {status} = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}