import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// export const sequelize = new Sequelize({
//   username: 'postgres',
//   password: 'postgres',
//   port: 5432,
//   database: 'postgres',
//   host: 'database-1.cqdodlstlmmv.us-east-1.rds.amazonaws.com',

//   dialect: "postgres",
//   storage: ":memory:",
// });
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
// alternative 
// the whole problem is here when running above its not working (try to fix it)
// export const sequelize = new Sequelize(
//   'postgres://postgres:postgres@database-1.cqdodlstlmmv.us-east-1.rds.amazonaws.com:5432/postgres'
//   );