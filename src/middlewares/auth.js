import jwt from "jsonwebtoken";
import config from "../config";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(403).json({ message: "no token provider" });
    const decoded = jwt.verify(token, config.SECRET);

    req.userId = decoded.id;
    const user = await User.findByPk(req.userId);

    if (!user) return res.status(404).json({ message: "no user found" });
    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export const checkDuplicateUser = async (req, res, next) => {
  const user = await User.findOne({ where: { fullName: req.body.fullName } });

  if (user) return res.status(400).json({ message: "The user already exists" });

  const email = await User.findOne({ where: { email: req.body.email } });

  if (email)
    return res.status(400).json({ message: "the email already exists" });

  next();
};
