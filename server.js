//SERVER
// console.log("Hello world");

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const routes = require("./routes/route")
const cors = require("cors");
app.use(express.json());

app.use(cors());
app.use("/", routes);
// db connection
mongoose
    .connect("mongodb+srv://akshithrai2k3:Akshith007@cluster0.xrdc1zn.mongodb.net/task")
    .then(() => {
        console.log("DB CONNECTED");

    })
    .catch((err) => {
        console.log(err, "something went wrong 😥");
    });

app.get("/test", (req, res) => {
    res.send("hello dj");
});

app.listen(3001, () => {
    console.log("server is connected 😮");
});