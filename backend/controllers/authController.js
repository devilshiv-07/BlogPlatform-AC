const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require("../config/config");
const createHttpError = require("http-errors");

const signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await User.create({ email, passwordHash });

    res.status(201).json({ message: 'User created successfully!', userId: newUser._id });
    
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
        const error = createHttpError(401, "Invalid email or password");
        return next(error);
    }

    const accessToken = jwt.sign({ userId: user._id }, config.accessTokenSecret, {
      expiresIn: '1d',
    });

    res.cookie("accessToken", accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
        sameSite: "none",
        secure: true
    })

    res.status(200).json({
        success: true,
        message: "User login successfully",
        data: user
    });

  } catch (err) {
    next(err);
  }
};

module.exports = { signup, login }