import Transactions from "../models/transaction";
import Types from "../models/type";
import { fn, col } from "sequelize";
import Category from "../models/category";

export const getSummary = async (req, res) => {
  try {
    // Fetch the transactionType IDs by their names
    const incomeType = await Types.findOne({ where: { name: "Income" } });
    const expenseType = await Types.findOne({ where: { name: "Expense" } });

    if (!incomeType || !expenseType) {
      return res.status(404).json({ error: "Transaction types not found" });
    }

    const totalIncome = await Transactions.sum("amount", {
      where: { "$transactionType.id$": incomeType.id },
      include: [{ model: Types, as: "transactionType" }],
    });

    const totalExpense = await Transactions.sum("amount", {
      where: { "$transactionType.id$": expenseType.id },
      include: [{ model: Types, as: "transactionType" }],
    });

    const expensesByCategory = await Transactions.findAll({
      where: { "$transactionType.id$": expenseType.id },
      attributes: [[fn("SUM", col("amount")), "total"]],
      include: [
        { model: Types, as: "transactionType" },
        {
          model: Category,
          as: "transactionCategory",
          attributes: ["name"],
        },
      ],
      group: ["transactionCategory.id"],
    });

    const incomesByCategory = await Transactions.findAll({
      where: { "$transactionType.id$": incomeType.id },
      attributes: [[fn("SUM", col("amount")), "total"]],
      include: [
        { model: Types, as: "transactionType" },
        {
          model: Category,
          as: "transactionCategory",
          attributes: ["name"],
        },
      ],
      group: ["transactionCategory.id"],
    });

    const balance = totalIncome - totalExpense;

    return res.status(200).json({
      totalIncome,
      totalExpense,
      balance,
      expensesByCategory,
      incomesByCategory,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
