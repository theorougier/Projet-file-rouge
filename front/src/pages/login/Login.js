import React from "react";
import { Formik } from "formik";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import OpacityCard from "../../component/OpacityCard";

function Login() {
  const styles = ownStyles();
  return (
    <section style={styles.parent}>
      <OpacityCard title="Se connecter">
        <LoginForm />
      </OpacityCard>
      {/* <div>
        <Link to="/">Accueil</Link> - Pas de compte?{" "}
        <Link to="/register">S'enregistrer</Link>
      </div> */}
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
