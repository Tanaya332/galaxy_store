const express=require("express")
const { isAuthenticatedUser } = require("../middleware/auth");
const { processPayment, paymentVerification } = require("../controller/paymentController");

const router=express.Router();


router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/paymentverification").post(isAuthenticatedUser, paymentVerification);

// router.route("/stripeapikey").get(isAuthenticatedUser, sendStripeApiKey);

module.exports = router;