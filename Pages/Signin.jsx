import React from "react";
import "./signin.css"
import Button2 from "../Components/BlueButton";
import BlueButton from "../Components/BlueButton";
export default function Signin() {
    return (
        <>
            <section className="body">
                <div className="signinbox">
                    <h2 className="my-5">Please Sign In</h2>
                    <div className="inputbox">
                        <input type="text" className="form-control" placeholder="Email"/>
                        <input type="text" className="form-control my-4" placeholder="Password"/>
                        <a href="/Home">
                            <BlueButton Text="LOGIN"></BlueButton>
                        </a>
                    </div>
                    <div className="my-4">
                        <a href="/Signup" className="mx-3">Forgot Password?</a>
                        <a href="/Signup" className="mx-3">Don't have an Account?</a>
                    </div>
                </div>
            </section>
        </>
    )
}