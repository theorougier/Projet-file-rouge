import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import OpacityCard from "../../component/OpacityCard";

function Login({ submit }) {
  const styles = ownStyles();
  return (
    <section style={styles.parent}>
      <OpacityCard title="Connexion">
        <LoginForm submit={submit} />
        <span>Pas de compte ?</span>
        <Link to="/register">S'enregistrer</Link>
      </OpacityCard>
    </section>
  );
}

const ownStyles = () => ({
  parent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default Login;
