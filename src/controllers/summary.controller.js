import Transactions from "../models/transaction";
import Types from "../models/type";

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

    const balance = totalIncome - totalExpense;

    return res.status(200).json({
      totalIncome,
      totalExpense,
      balance,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
