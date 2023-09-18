import User from "../models/User";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const userFound = await User.findOne({ where: { id } });

  if (!userFound) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json(userFound);
};
