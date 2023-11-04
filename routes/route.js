const express = require("express");
const router = express.Router();
const { createSignup, loginApi } = require("../controller/signupcontroller");



router.post("/Signup", createSignup); // Changed the route to '/signup' and the function name to createSignup
router.post("/RAM", loginApi); // Changed the route to '/login' and the function name to loginSignup

module.exports = router;
