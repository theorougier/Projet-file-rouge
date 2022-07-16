import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import OpacityCard from "../../component/OpacityCard";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

function Login({ submit }) {
  const styles = ownStyles();
  return (
    <section style={styles.parent}>
      <Logo style={styles.logo} />
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  logo: { maxWidth: "90%" },
});

export default Login;
