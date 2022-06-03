import React from 'react';
import { StyleSheet, View } from 'react-native';
import Form from "../components/Form";
import {Text} from "react-native";
export default function Login() {
  return (
    <View style={styles.container}>
      <Text>
          Connexion
      </Text>
      <Form action={'login'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightpink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
