import React from 'react'
import {Formik} from 'formik';
import LoginForm from "./LoginForm";
import {Link} from "react-router-dom";

function Login() {
    return (
        <section>
            <h1>Se Connecter</h1>
            <div>
                <LoginForm/>
            </div>
            <div><Link to="/">Accueil</Link> - Pas de compte? <Link to="/register">S'enregistrer</Link></div>
        </section>
    )
}

export default Login