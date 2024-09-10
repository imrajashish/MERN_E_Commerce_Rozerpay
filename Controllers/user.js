import User from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

//user register
export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // if email already register
    let user = await User.findOne({ email });
    if (user)
      return res.json({ message: "User Already Register...", success: false });

    // password bcrypt
    const hasPass = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hasPass });
    res.json({
      message: "User Registration successfully",
      user,
      success: true,
    });
  } catch (error) {
    res.json({ message: "error" + error.message });
  }
};

//user Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.json({ message: "User Not find", success: false });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.json({ message: "Invalid Credential", success: false });
    const token = jwt.sign({ userId: user._id }, "3534cff", {
      expiresIn: "365d",
    });
    res.json({
      message: `Welcome to ${user.name}`,
      token,
      success: true,
    });
  } catch {
    res.json({ message: "Login error" + error.message });
  }
};

//get all user
export const users = async (req, res) => {
  try {
    let users = await User.find().sort({ createAt: -1 });
    res.json(users);
  } catch (error) {
    res.json(error.message);
  }
};

export const profile = async (req, res) => {
  res.json({ user: req.user });
};
