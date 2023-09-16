import { DataTypes } from "sequelize";
import { sequelize } from "../database";

const Category = sequelize.define("Category", {
  name: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(256),
    allowNull: false,
  },
});

export default Category;
