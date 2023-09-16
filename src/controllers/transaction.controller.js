import Transactions from "../models/transaction";

export const createTransaction = async (req, res) => {
  try {
    const transaction = await Transactions.create(req.body);
    return res.status(201).json(transaction);
  } catch (error) {
    return res.status(500).json({ error: "Error creating transaction" });
  }
};

export const getAllTransactions = async (req, res) => {
  try {
    const transactions = await Transactions.findAll();
    return res.status(200).json(transactions);
  } catch (error) {
    return res.status(500).json({ error: "Error retrieving transactions" });
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
    return res.status(500).json({ error: "Error updating transaction" });
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
    return res.status(500).json({ error: "Error deleting transaction" });
  }
};
