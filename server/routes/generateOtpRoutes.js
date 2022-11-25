const router = require("express").Router();
const { otpGenerator } = require("../controllers/generateOtpController");

router.post("/generateOtp", otpGenerator);

module.exports = router;