import React from "react";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import OpacityCard from "../../component/OpacityCard";

function Login() {
  const styles = ownStyles();
  return (
    <section style={styles.parent}>
      <OpacityCard title="Connexion">
        <LoginForm />
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
