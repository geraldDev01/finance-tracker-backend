import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import bcrypt from "bcryptjs";
import { serialize } from "cookie";

//move to utils.js
const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const passHash = await bcrypt.hash(password, salt);
  return passHash.toString();
};

const comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const encryptedPassword = await encryptPassword(password);

    const newUser = new User({
      fullName,
      email,
      password: encryptedPassword,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, //seg 24 hrs
    });

    res.status(200).json({ token, user: savedUser });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await User.findOne({ where: { email } });

  if (!userFound)
    return res
      .status(400)
      .json({ token: null, message: "ERROR User not found" });

  const matchPassword = await comparePassword(password, userFound.password);

  if (!matchPassword)
    return res
      .status(401)
      .json({ token: null, message: "ERROR invalid password" });

  const token = jwt.sign(
    { id: userFound._id, fullName: userFound.fullName },
    config.SECRET,
    {
      expiresIn: 86400,
    }
  );
  const serialized = serialize("trackerToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 86400,
    path: "/",
  });

  console.log("serialized", serialized);

  res.setHeader("Set-Cookie", serialized);
  res.json({ token, user: userFound });
};
