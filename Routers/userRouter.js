const express = require("express");
const userController = require("../Controller/userController")
const router = express.Router();

router.route("/dangki.html").post(userController.registerUser);
router.route("/trangchu.html").post(userController.login);
router.route("/trangchu.html").get(userController.findFilm);

module.exports = router;