const express = require("express");
const router = express.Router();

const { register } = require("../controllers/auth.controller");

router.get("/register", (req, res) => {
  res.json({
    success: true,
    message: "GET Route Working"
  });
});

router.post("/register", register);

module.exports = router;