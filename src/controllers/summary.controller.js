import Transactions from "../models/transaction";
import Types from "../models/type";

export const getSummary = async (req, res) => {
  try {
    const totalIncome = await Transactions.sum("amount", {
      where: { "$transactionType.id$": 1 },
      include: [{ model: Types, as: "transactionType" }],
    });

    const totalExpense = await Transactions.sum("amount", {
      where: { "$transactionType.id$": 2 },
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
