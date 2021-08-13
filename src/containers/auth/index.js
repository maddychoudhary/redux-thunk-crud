import React, { useState, useEffect } from 'react'
import AuthForm from '../../components/AuthForm'
import { Redirect, useHistory } from "react-router-dom";
import { login } from "../../actions/loginAction";
import { useDispatch } from "react-redux";

const Auth = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [loading, setLoading] = useState(false);
    const [changeForm, setChangeForm] = useState(true);
    let auth = localStorage.getItem("uid");
    const change_Form = () => {
        setChangeForm(false)
    }
    const siginUpSubmit = () => {

    }
    const loginSubmit = (e) => {
        const data = {
            email: email,
            password: pass,
        }
        dispatch(login(data));
        history.push("/home")

    }
    const facebookLogIn = () => {

    }
    return (
        <>
            {auth ? (<Redirect to="/customer"></Redirect>) : (null)}
            <div className="login">
                <h3 className="welcome">welcome</h3>
                {changeForm ?
                    <AuthForm changeForm={changeForm} email={email} setEmail={(e) => { setEmail(e.target.value); document.querySelector(".ErrorClass").innerHTML = "" }} pass={pass} setPass={(e) => { setPass(e.target.value) }} loading={loading} loginSubmit={loginSubmit} signUpChange={change_Form} ErrorClass="ErrorClass" facebookLogIn={facebookLogIn} />
                    :
                    <AuthForm changeForm={changeForm} email={email} setEmail={(e) => { setEmail(e.target.value) }} pass={pass} setPass={(e) => { setPass(e.target.value) }} loading={loading} siginUpSubmit={siginUpSubmit} />
                }


            </div>
        </>
    )
}

export default Auth
