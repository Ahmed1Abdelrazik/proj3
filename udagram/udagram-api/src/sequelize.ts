import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

console.log(config.username, config.password, config.dbport)
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  port: config.dbport,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
});