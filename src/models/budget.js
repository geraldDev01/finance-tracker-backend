import { DataTypes } from "sequelize";
import { sequelize } from "../database";
import Category from "./category";
import User from "./User";

const Budget = sequelize.define("Budget", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  expectedExpenses: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Budget.belongsTo(User, {
  foreignKey: "user",
  as: "budgetUser",
});

Budget.belongsTo(Category, {
  foreignKey: "category",
  as: "budgetCategory",
});

export default Budget;
