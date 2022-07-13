import React, { useEffect, useState } from "react";
// import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function useLogin() {
  const [logged, setLogged] = useState();
  const [userEmail, setUserEmail] = useState();

  useEffect(() => {
    getValueFor("token").then((resp) => {
      setLogged(resp);
    });
  }, []);

  async function getValueFor(key) {
    let result = await document.cookie.getItemAsync(key);
    if (result) {
      return true;
    } else {
      return false;
    }
  }

  function LogOut() {
    document.cookie.deleteItemAsync("token").then(setLogged(false));
  }

  async function submit(data) {
    axios
      .post("http://localhost:5000/api/auth", {
        email: data.email,
        password: data.password,
      })
      .then(async function (resp) {
        await document.cookie.setItemAsync("token", resp.data.token);
        setLogged(true);
        const email = JSON.parse(resp.config.data);
        setUserEmail(email.email);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  console.log(userEmail);

  return {
    logged,
    userEmail,
    getValueFor,
    LogOut,
    submit,
  };
}
