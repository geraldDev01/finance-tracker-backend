import Category from "../models/category";
import Transactions from "../models/transaction";
import Types from "../models/type";
import User from "../models/User";

export const createTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.create(req.body);
    return res.status(201).json(transaction);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const page = req.params.page || 1;
    const limit = req.params.limit || 10;
    const offset = (page - 1) * limit;

    const transactions = await Transactions.findAll({
      include: [
        { model: User, as: "transactionUser" },
        { model: Types, as: "transactionType", attributes: ["name"] },
        { model: Category, as: "transactionCategory", attributes: ["name"] },
      ],
      limit,
      offset,
    });

    return res.status(200).json(transactions);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const [updated] = await Transactions.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedTransaction = await Transactions.findByPk(id);
      return res.status(200).json(updatedTransaction);
    }
    return res.status(404).json({ error: "Transaction not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Transactions.destroy({
      where: { id },
    });
    if (deleted) {
      return res.status(204).send();
    }
    return res.status(404).json({ error: "Transaction not found" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
