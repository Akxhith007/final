import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BlueButton from "../Components/BlueButton";

const Signup= () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      // Add input validation here if needed

      const response = await axios.post("http://localhost:3001/Signup", {
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Password: password,
      });

      console.log(response);

      // Assuming your backend returns a success message
      toast.success(response.data.message);
    } catch (error) {
      // Handle registration failure
      console.error("Error:", error);

      // Display a more specific error message if possible
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Signing up failed. Please try again.");
      }
    }
  };

  return (
    <section className="body">
      <div className="signinbox">
        <h2 className="my-5">Please Sign Up</h2>
        <div className="inputbox">
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            className="form-control my-2"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="email"
            className="form-control my-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control my-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="/Home">
            <BlueButton Text="SIGNUP" onClick={handleSignup} />
          </a>
        </div>
        <div className="my-4">
          <a href="/Signin" className="mx-3">
            Already have an Account?
          </a>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
}
export default Signup;