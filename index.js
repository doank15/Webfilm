const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const express = require("express");
const path = require("path");
require("dotenv").config();
const port = process.env.PORT || 3000;
const app = express();
const userRoutes = require("./Routers/userRouter");
app.use(express.static(__dirname));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
const connectDatabase = require("./Config/db");
// const auth = require("./middleware/auth")
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/dangnhap.html"));
})

app.use('/', userRoutes)
app.get("/trangchu.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangchu.html"));
})

app.get("/dangnhap.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/dangnhap.html"));
})
app.get("/dangki.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/dangki.html"));
})
app.get("/lienhe.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/lienhe.html"));
})
app.get("/dnthanhcong.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/dnthanhcong.html"));
})
app.get("/trangthongtinphim.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangthongtinphim.html"));
})
app.get("/trangthongtinphim2.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangthongtinphim2.html"));
})
app.get("/trangthongtinphim3.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangthongtinphim3.html"));
})
app.get("/trangthongtinphim4.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangthongtinphim4.html"));
})
app.get("/trangthongtinphim5.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangthongtinphim5.html"));
})
app.get("/trangthongtinphim6.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangthongtinphim6.html"));
})
app.get("/trangphim.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangphim.html"));
})
app.get("/trangphim2.html", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/trangphim2.html"));
})
connectDatabase();
app.listen(port, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log(`App running on Port: ${port}`);
})