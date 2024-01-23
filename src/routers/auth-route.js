const express = require("express")
const router = express.Router();
const authControll = require("../controllers/auth-controller")

router.post("/register",authControll.register)
router.post("/login",authControll.login)
router.post("/forget-password",authControll.forgetPassword)
router.get("/forget-password/:token",authControll.verifyForgetPassword)
router.post("/reset-password/:token",authControll.resetPassword)


module.exports = router;