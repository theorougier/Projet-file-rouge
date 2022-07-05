import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import LoginForm from "../login/LoginForm";
import RegisterForm from "./RegisterForm";
import OpacityCard from "../../component/OpacityCard";

function Register() {
  const styles = ownStyles();
  return (
    <section style={styles.parent}>
      <OpacityCard title="Création de compte">
        <RegisterForm />
        <span>Vous avez déjà un compte ?</span>
        <Link to="/login">Se connecter</Link>
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

export default Register;
