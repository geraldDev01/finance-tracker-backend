import Type from "../models/type";

export const getTypes = async (req, res) => {
  const types = await Type.findAll();
  res.status(200).json(types);
};
