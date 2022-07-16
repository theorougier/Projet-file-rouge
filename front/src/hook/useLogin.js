import React, { useEffect, useState } from "react";
// import * as document.cookie from "expo-secure-store";
import axios from "axios";
import useValidation from "./useValidation";

export default function useLogin(navigation) {
  const [logged, setLogged] = useState(false);
  const [userEmail, setUserEmail] = useState();
  const [loginError, setLoginError] = useState(null);
  const [registerError, setRegisterError] = useState(null);

  const { errorValidation, validate } = useValidation();

  // useEffect(() => {
  //   getValueFor("token").then((resp) => {
  //     setLogged(resp);
  //   });
  // }, []);

  async function getValueFor(key) {
    if (document.cookie.includes("token")) {
      return true;
    } else {
      return false;
    }
  }

  function LogOut() {
    document.cookie = "token=";
    console.log("login to false");
    setLogged(false);
  }

  async function submit(data) {
    if (data.email === "" && data.password === "") {
      setLoginError("Vous n'avez renseigner aucune informations");
    } else if (data.password === "") {
      setLoginError("Le champ mot de passe n'est pas renseigné");
    } else if (data.email === "") {
      setLoginError("Le champ mail n'est pas renseigné ");
    } else {
      axios
        .post("http://localhost:5000/api/auth", {
          email: data.email,
          password: data.password,
        })
        .then(async function (resp) {
          setLogged(true);
          document.cookie = `token=${resp.data.token}`;
          document.cookie = `userId=${resp.data.id}`;
          console.log("logged :", logged);
          setTimeout(() => {
            window.location.replace("/profile");
          }, 5000);
        })
        .catch(function (error) {
          setLoginError("Identifiant ou mot de passe invalide");
        });
    }
  }

  async function register(data) {
    console.log(data.email);
    if (data.email === "" && data.password === "") {
      setRegisterError("Vous n'avez reneigner aucune informations");
    } else if (data.password === "") {
      setRegisterError("Le champ mot de passe n'est pas renseigné");
    } else if (data.email === "") {
      setRegisterError("Le champ mail n'est pas renseigné ");
      console.log("test");
    } else if (errorValidation === "Email invalide") {
      setRegisterError(errorValidation);
    } else {
      axios
        .post("http://localhost:5000/api/user", {
          email: data.email,
          password: data.password,
          isAdmin: false,
          preferences: {},
        })
        .then(async function (resp) {
          navigation.navigate("Login");
        })
        .catch(function (error) {
          setRegisterError("Email déjà utilisé");
        });
    }
  }

  return {
    logged,
    userEmail,
    loginError,
    registerError,
    errorValidation,
    validate,
    getValueFor,
    LogOut,
    submit,
    register,
  };
}
