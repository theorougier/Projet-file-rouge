import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../component/CustomButton";
import useUsers from "../../hook/useAdmin";

function Users() {
  const styles = ownStyles();

  const { users } = useUsers();

  console.log(users);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Utilisateurs</h1>
      <div style={styles.buttons}>
        <CustomButton label={"+ Ajouter un utilisateur"} />
      </div>
    </div>
  );
}

const ownStyles = () => ({
  container: {
    padding: "40px 20px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontFamily: "Rubik",
    fontSize: "32px",
    textAlign: "center",
  },
  buttons: { display: "flex", flexDirection: "column", gap: "16px" },
});

export default Users;
