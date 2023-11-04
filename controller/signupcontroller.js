const signupmodel = require("../models/signupmodel");
const Validator = require("./validation.js");
const jwt = require('jsonwebtoken');

const createSignup = async (req, res) => {
    try {
        const data = req.body;

        if (!Validator.isValidBody(data)) {
            return res.status(400).json({ status: false, msg: "No data provided" });
        }

        const {First_Name,Last_Name, Email, Password, } = data;
        if (!Validator.isValid(First_Name)) {
            return res.status(400).json({ status: false, msg: "First name  is required" });
        }
        if (!Validator.isValid(Last_Name)) {
            return res.status(400).json({ status: false, msg: "Last name is required" });
        }

        if (!Validator.isValid(Email) || !Validator.isValidEmail(Email)) {
            return res.status(400).json({ status: false, msg: "Invalid or missing Email" });
        }

        const sameEmail = await signupmodel.findOne({ Email });

        if (sameEmail) {
            return res.status(400).json({ status: false, msg: "This email already exists" });
        }

        if (!Validator.isValid(Password)) {
            return res.status(400).json({ status: false, msg: "Password is required" });
        }
        // if (formData.Confirm_Password.trim() === "") {
        //     errors.Confirm_Password = "Confirm Password is required";
        //   } else if (formData.Confirm_Password !== formData.Password) {
        //     errors.Confirm_Password = "Passwords do not match";
        //   }

        const register = await signupmodel.create(data);
        await register.save();
        // Lo
        return res.status(201).json({ status: true, msg: "Signed up successfully", data: register });
    } catch (error) {
        console.error("Error creating signup:",error);
        return res.status(500).json({ status: false, msg: "Internal server error" });
    }
};

const loginApi = async (req, res) => {
    try {
        const data = req.body;
        if (!Validator.isValidBody(data)) {
            return res.status(400).json({ status: false, msg: "No data provided" });
        }

        const { Email, Password } = data;

        if (!Validator.isValid(Email)) {
            return res.status(400).json({ status: false, msg: "Please enter your Email" });
        }

        if (!Validator.isValid(Password)) {
            return res.status(400).json({ status: false, msg: "Please enter your Password" });
        }

        const matchSignup = await signupmodel.findOne({ Email, Password });

        if (!matchSignup) {
            return res.status(404).json({ status: false, msg: "No matching registration found" });
        } else {
            const token = jwt.sign(
                {
                    signupId: matchSignup._id.toString(),
                },
                "Mern Stack", // Consider moving this secret into an environment variable
                {
                    expiresIn: "200000sec",
                }
            );
            return res.status(200).json({ status: true, msg: "Logged in successfully", token });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: false, msg: "Internal server error" });
    }
};

module.exports = { createSignup, loginApi };
