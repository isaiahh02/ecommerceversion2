const mysql = require("mysql");
const config = {
  host: "localhost",
  user: "root",
  password: "password",
  database: "ecommerce2",
};

const connection = mysql.createConnection(config);
connection.connect();
module.exports = connection;
