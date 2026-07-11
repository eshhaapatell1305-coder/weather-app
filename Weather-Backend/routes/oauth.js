const express = require("express");
const passport = require("passport");

const router = express.Router();

// Google Login
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Callback
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    res.send("Google Login Successful!");
  }
);

module.exports = router;