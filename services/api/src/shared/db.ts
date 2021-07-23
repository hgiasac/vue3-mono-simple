import { Sequelize } from "sequelize";
import { Config } from "./config";

const sequelize = new Sequelize(Config.databaseUrl);

export { sequelize };
