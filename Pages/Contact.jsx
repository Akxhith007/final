import React from "react";
import "./contact.css"
import ProfileCard from "../Components/ProfileCard";
import Vishal from "../Components/Images/Vishal.jpg"
import Toshan from "../Components/Images/Toshan.jpg"
import Akshith from "../Components/Images/Akshith.jpg"
import Sahil from "../Components/Images/Sahil.jpg"
import Swaroop from "../Components/Images/Swaroop.jpg"
export default function Contact(){
    return(
        <>
            <div className="contactbox">
                <div className="contact-header">
                    <h1>THE TEAM</h1>
                </div>
                <p className="text-white text-center my-5 heading">Members</p>
                <div className="card-group">
                    <ProfileCard image={Vishal} name="Vishal Naik" usn="4SF21CY057" email="vishalnaik739@gmail.com"></ProfileCard>
                    <ProfileCard image={Akshith} name="Akshith Rai" usn="4SF21CY007" email="akshithrai2k3@gmail.com"></ProfileCard>
                    <ProfileCard image={Sahil} name="Sahil Rane" usn="4SF21CY036" email="Sahilrane271@gmail.com"></ProfileCard>
                    <ProfileCard image={Swaroop} name="Swaroop" usn="4SF21CY052" email="swaroopym1611@gmail.com"></ProfileCard>
                    <ProfileCard image={Toshan} name="Toshan S M" usn="4sf21cs179" email="toshan.21cs@sahyadri.edu.in"></ProfileCard>
                </div>
            </div>
        </>
    )
}