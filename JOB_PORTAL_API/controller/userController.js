import bcrypt from "bcrypt";
import validator from "validator";
import userModel from "../model/userModels.js";
import { generateToken } from "../config/jwtToken.js";

// login controller
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ status: "error", message: "User doesn't exist" });
    }
    if (!user.isActive) {
        return res.status(400).json({ status: "error", message: "Your account is not active" });
      }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }

    const token = generateToken(user.id); // Ensure generateToken is defined
    const { password: oldPass, ...userInfo } = user._doc; // Assuming you're using Mongoose, use ._doc to get raw object.

    user.signInToken = token;
    user.signInTokenExpireTime = Date.now() + 24 * 60 * 60 * 1000; // 1 day
    await user.save();

    // Set the token in a cookie (you can adjust options like secure, httpOnly, etc.)
    res.cookie("token", token, {
      httpOnly: true, // Cookie is not accessible from JavaScript
      secure: process.env.NODE_ENV === "production", // Send only over HTTPS in production
      sameSite: "Strict", // Helps mitigate CSRF attacks
      maxAge: 24 * 60 * 60 * 1000, // Cookie expires in 24 hours
    });

    res.status(200).json({
      status: "success",
      message: "Successful login",
      body: { userInfo },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Something went wrong",
      body: { error },
    });
  }
};

// register controller
export const registerUser = async (req, res) => {
  const userData = req.body;
  const { email, password } = userData;
  try {
    // Validate email
    if (!validator.isEmail(email)) {
      return res
        .status(400)
        .json({ status: "error", message: "Invalid email" });
    }

    // Check if user already exists
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ status: "error", message: "User already exists" });
    }

    // Check valid password
    if (password.length < 8) {
      return res
        .status(400)
        .json({ status: "error", message: "Please enter a strong password!" });
    }

    // Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    userData.password = hashedPassword;

    // Create new user
    const newUser = new userModel({
      username: userData.username,
      phone: userData.phone,
      email: userData.email,
      password: userData.password,
      role: userData.role,
      signInTokenExpireTime: Date.now() + 24 * 60 * 60 * 1000,
    });

    const user = await newUser.save();
    const token = generateToken(user.id); // Ensure generateToken is defined correctly

    // Update user with the generated token
    user.signInToken = token;
    await user.save();

    res.status(201).json({
      status: "success",
      message: "Successfully registered user.",
      data: { token, user },
    });
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", message: error.message, body: { error } });
  }
};

// export default registerUser;
/*
export const updateUser = async (req, res) => {
    const id = req.params.id;
    const coin = req.body.coin;
    try {
        const user = await userModel.findByIdAndUpdate({ "_id": id }, { coin: coin })
        user.coin = coin;
        res.status(200).json({ status: "success", message: "update successful", data: { user } })
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: "error", message: 'Server error', data: { error: error.message } });
    }
}

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({ status: "ACTIVE", role: "CUSTOMER" });

    const totalUsers = users.length; // Get the total number of users

    res.status(200).json({
      status: "success",
      data: {
        users: users,
        totalItems: totalUsers,
        currentPage: 1, // Since we're returning all users, you can set this to 1
        pageSize: totalUsers, // Page size is the total number of users
      },
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({
        status: "error",
        message: "Server error",
        data: { error: error.message },
      });
  }
};





export const signOut = (req, res) => {
    try {
        // Clear the token by setting the cookie value to an empty string and expiring it
        res.cookie('token', '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Strict',
            expires: new Date(0) // Immediately expire the cookie
        });

        res.status(200).json({ success: true, message: "Successfully signed out" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Something went wrong during sign out" });
    }
}
// get user by ID controller
export const getUserById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await userModel.findById(userId).select('-password'); // Exclude password from the response
        
        if (!user) {
            return res.status(404).json({ status: "error", message: "User not found" });
        }

        res.status(200).json({ status: "success", data: user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Server error", data: { error: error.message } });
    }
};
*/
