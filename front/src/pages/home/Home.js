import React from "react";
import { Link } from "react-router-dom";

import CustomButton from "../../component/CustomButton";

function Home() {
  const styles = ownStyles();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Menu</h1>
      <div style={styles.buttons}>
        <Link to={"/users"}>
          <CustomButton label={"Utilisateurs"} />
        </Link>
      </div>
      <div style={styles.buttons}>
        <Link to={"/content"}>
          <CustomButton label={"Contenus"} />
        </Link>
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

export default Home;
