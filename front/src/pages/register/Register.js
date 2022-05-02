import React from 'react'
import {Formik} from "formik";
import LoginForm from "../login/LoginForm";
import RegisterForm from "./RegisterForm";
import {Link} from "react-router-dom";

function Register() {
    return (
        <section>
            <h1>S'Enregistrer</h1>
            <div>
                <RegisterForm/>
            </div>
            <div><Link to="/">Accueil</Link> - Déjà un compte? <Link to="/login">Se connecter</Link></div>
        </section>
    )
}

export default Register