require('dotenv').config();
const { PG_HOST, PG_PORT, PG_USER, PG_PASSWORD, PG_DATABASE } = process.env;
module.exports = {
  development: {
    username: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    host: PG_HOST,
    dialect: 'postgres'
  },
  test: {
    username: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    host: PG_HOST,
    dialect: 'postgres'
  },
  production: {
    username: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    host: PG_HOST,
    dialect: 'postgres'
  }
};
