import Budget from "../models/budget";

export const createBudget = async (req, res) => {
  try {
    const budget = await Budget.create(req.body);
    return res.status(201).json(budget);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllBudgets = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = req.params.limit || 10;
    const offset = (page - 1) * limit;

    const budgets = await Budget.findAll({
      include: [
        { model: Category, as: "budgetCategory", attributes: ["name"] },
      ],
      limit,
      offset,
    });

    return res.status(200).json(budgets);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
