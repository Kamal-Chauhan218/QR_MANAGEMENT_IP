const express = require("express");
const router = express.Router();
const { postSignup, postLogin } = require("../controllers/auth");
const {
  getUserData,
  newUserData,
  getAllData,
} = require("../controllers/userdatacontroller");
router.post("/login", postLogin);
router.route("/userdata").get(getUserData);
// router.route("/newUserData").post(newUserData);
router.route("/alldata/:id").get(getAllData);
router.route("/").post(postSignup);
module.exports = router;
