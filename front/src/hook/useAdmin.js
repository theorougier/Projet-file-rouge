import React, { useEffect, useState } from "react";
import axios from "axios";

export default function useUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/admin/userId")
      .then(async function (resp) {
        console.log("console :", resp);
        return setUsers(resp);
      })
      .catch(function (error) {
        //   setLoginError("Identifiant ou mot de passe invalide");
      });
  }, []);

  return users;
}
