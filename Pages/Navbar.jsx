import React from "react";
import "./navbar.css"
import Button from "../Components/Button";
export default function Navbar() {
    return (
        <>
            <nav className="bg-dark navbar navbox">
                <div className="container-fluid">
                    <div className="flex">
                        <a className="text-white mx-3 navheading" href="/Home">Explore Mangalore</a>
                        <ul className="navbar m-0 mx-3">
                            <li className="nav-item mx-3">
                                <a className="text-white" href="/Home">Home</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white" href="/Contact">About Us</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white" href="/BusRoute">Bus Routes</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white" href="/Cities">Visit Places</a>
                            </li>
                            <li className="nav-item mx-3">
                                <a className="text-white" href="/Restaurants">Restaurants</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a className="mx-3" href="/Signin">
                            <Button Text="Sign In"></Button>
                        </a>
                        <a href="/Signup">
                            <Button Text="Sign Up"></Button>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}