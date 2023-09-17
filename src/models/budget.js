import { DataTypes } from "sequelize";
import { sequelize } from "../database";
import Category from "./category";

const Budget = sequelize.define("Budget", {
  category: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  active: {
    type: DataTypes.BOOLEAN,
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
  budgetAmount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});

Budget.belongsTo(Category, {
  foreignKey: "category",
  as: "budgetCategory",
});

export default Budget;
