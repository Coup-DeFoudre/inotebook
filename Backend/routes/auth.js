const express = require("express");
const User = require("../Models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../Middleware/fetchuser");
const JWT_SECRET = "thisisasecretkey";

// Route 1 : endpoint for Create a user using: POST "/api/auth/createuser". Doesn't require Auth (Public)
router.post(
  "/createuser",
  [
    //server side validation
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 6 characters").isLength({
      min: 6,
    }),
    body("username", "Enter a valid username").isLength({ min: 3 }),
  ],
  async (req, res) => {
    let success = false;
    // If there are errors, return Bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(success ? 200 : 400).send(`Hello, ${req.query.person}!`);

    }
    // If there are no errors, then create a user

    try {
      // check whether the user with this email exists already
      let email = await User.findOne({ email: req.body.email });
      if (email) {
        return res
          .status(400)
          .json({success, error: "Sorry a user with this email already exists" });
      }
      //check whether the user with this username exists already

      let username = await User.findOne({ username: req.body.username });
      if (username) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this username already exists" });
      }
      // create a new user
      // hash the password
      const salt = await bcrypt.genSalt(10);
      const secpass = await bcrypt.hash(req.body.password, salt);
      let user = await User.create({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: secpass,
      });
      // sending user id in the token
      const data = {
        user: {
          id: user.id,
        },
      };
      // creating a token

      const token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success,token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 2: endpoint for Authenticate a user using: POST "/api/auth/login". No login required

router.post(
  "/login",
  [
    //server side validation
    body("username", "Enter a valid username").isLength({ min: 3 }),

    body("password", "Password can not be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    // if there are errors, return Bad request and the errors
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.send(`Hello, ${req.query.person}!`);
    }

    const { username, password } = req.body;
    try {
      let user = await User.findOne({ username });
      if (!user) {
        success = false;
        return res.status(400).json({

          error: "Please try to login with correct credentials or Sign Up",
        });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res.status(400).json({
          error: "Please try to login with correct credentials or Sign Up",
        });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success,token });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// Route 3: endpoint for Authenticate a user using: POST "/api/auth/getuser". login required

router.post('/getuser',fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
