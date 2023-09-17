import Category from "../models/category";

export const getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.status(200).json(categories);
};
