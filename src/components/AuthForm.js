import React from 'react'
import InputField from './InputField';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Button from "./Button"

const AuthForm = (props) => {
    const { loading, email, pass, setEmail, setPass, signUpChange, loginSubmit, siginUpSubmit, changeForm, ErrorClass, facebookLogIn } = props
    return (
        <>
            {
                loading ? (
                    <div className="loader_react">
                        <Loader
                            type="ThreeDots"
                            color="#00BFFF"
                            height={100}
                            width={100}
                            color="rgb(136, 105, 46)"
                        />
                    </div>
                ) : (<>
                    <form className="auth_form">
                        <InputField label="Email" type="email" name="email" placeholder="Enter your email" value={email} change={setEmail} />
                        <InputField label="Password" type="password" name="password" placeholder="Enter your password" value={pass} change={setPass} />
                        <div id="loginButton">
                            <Button handleButton={changeForm ? loginSubmit : siginUpSubmit} className="btn btn-secondary" name={changeForm ? "Sign in" : "Sign up"} />
                            <div id="sign_up_btn" onClick={signUpChange}>{changeForm ? "sign up" : ""}</div>
                        </div>
                    </form>
                    <div id="gol_fb">
                        <span className={ErrorClass} style={{ color: "red" }}></span>
                        <Button idName="google_btn" className="btn btn-primary" name={changeForm ? "Sign in with Google +" : "Sign up with Google +"} />
                        <Button handleButton={facebookLogIn} idName="facebook_btn" className="btn btn-success" name="Sign up with Facebook" />
                    </div>
                </>
                    )
            }




        </>
    )
}

export default AuthForm
