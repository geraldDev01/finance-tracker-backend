import { DataTypes } from "sequelize";
import { sequelize } from "../database";

const Types = sequelize.define("Types", {
  typeName: {
    type: DataTypes.STRING(),
  },
});

export default Types;
