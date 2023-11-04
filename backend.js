
const express = require("express");
const mongooose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://ToshanDB:Toshiba292003@cluster0.inmodwz.mongodb.net/").then(()=>{
    console.log("DB Connected.");
}).catch((err)=>{
    console.log("Something went wrong");
});

app.get("/home",(req,res)=>{
    res.send("Hello this is the backend Server for Team D2 Final project.");
});

app.listen(4000,()=>{
    console.log("Server is Running.");
});