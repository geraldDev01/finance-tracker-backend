import { DataTypes } from "sequelize";
import { sequelize } from "../database";
import Category from "./category";
import Types from "./type";
import User from "./User";

const Transactions = sequelize.define("Transactions", {
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Transactions.belongsTo(User, {
  foreignKey: "user",
  as: "transactionUser",
});

Transactions.belongsTo(Types, {
  foreignKey: "type",
  as: "transactionType",
});

Transactions.belongsTo(Category, {
  foreignKey: "category",
  as: "transactionCategory",
});

export default Transactions;
