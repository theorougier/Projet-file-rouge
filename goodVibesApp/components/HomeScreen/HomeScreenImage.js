import React, { useEffect, useState, useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Logo from "../Logo/Logo";
import SettingButton from "../Button/SettingButton";
import Title from "../Title/Title";
import DownloadButton from "../Button/DownloadButton";
import PrimaryButton from "../Button/PrimaryButton";
import { useNavigation } from "@react-navigation/core";
import useApi from "../../hook/useApi";
import useDownload from "../../hook/useDownload";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import customNotificationsData from "../../notification.json";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function HomeScreenImage({ styles }) {
  const navigation = useNavigation();
  const { randomImage, isImageLoading, saveFav, isAlreadyFav, imageRandom } =
    useApi();
  const { SaveToPhone } = useDownload();
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  return (
    <View>
      <View style={styles.flexRowContainer}>
        <Logo />
        <SettingButton handlePress={() => navigation.navigate("Options")}>
          <Image source={require("../../assets/img/profile-3.png")} />
        </SettingButton>
      </View>
      <View style={styles.flexRowContainer}>
        <Text style={{ width: 30, height: 30 }}> </Text>
        <Title style={styles.title}>Image</Title>
        <DownloadButton handlePress={() => SaveToPhone(randomImage)}>
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../assets/img/download.png")}
          />
        </DownloadButton>
      </View>
      {isImageLoading ? (
        <Text
          style={{
            textAlign: "center",
            height: 350,
            display: "flex",
            alignItems: "center",
            color: "white",
          }}
        >
          Loading...
        </Text>
      ) : (
        <Image
          source={{ uri: randomImage }}
          style={{ width: "100%", height: 350, borderRadius: 10 }}
        />
      )}
      <View>
        <PrimaryButton handlePress={() => saveFav()}>
          <Text>
            {isAlreadyFav ? "Retirer des favoris" : "Ajouter aux favoris"}
          </Text>
        </PrimaryButton>
        <PrimaryButton handlePress={() => imageRandom()}>
          <Text>{"Nouvelle image"}</Text>
        </PrimaryButton>
        <PrimaryButton
          handlePress={async () => await sendPushNotification(expoPushToken)}
        >
          <Text>Besoin d'un petit réconfort ?</Text>
        </PrimaryButton>
      </View>
    </View>
  );
}

const randomNotificationGeneration = () => {
  return customNotificationsData.notifications[
    Math.floor(Math.random(0) * customNotificationsData.notifications.length)
  ];
};

async function sendPushNotification(expoPushToken) {
    const message = {
      to: expoPushToken,
      sound: "default",
      title: "N'oublie pas",
      body: randomNotificationGeneration(),
    };

    await fetch("https://exp.host/--/api/v2/push/send", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Accept-encoding": "gzip, deflate",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
}

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
}
