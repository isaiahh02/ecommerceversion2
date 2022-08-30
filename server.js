const express = require("express");
const path = require("path");
const fs = require("fs");
var cors = require("cors");
const app = express();
const mysql = require("mysql2");
app.use(express.json());
app.use(cors());

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "product",
});

connection.connect((err) => {
  if (!err) {
    console.log("Database connected successfully");
  } else {
    console.log("Error: ", err);
  }
});

app.use((req, res, next) => {
  // console.log("hmmm");
  fs.appendFile(
    "request.log",
    `${req.method} ${req.url} ${new Date().toString()}\n`,
    (err) => {
      if (err) {
        console.log("couldnt write to file");
      }
    }
  );
  next();
});

app.use(express.static(path.join(__dirname, "build")));
app.get("/getshop", (req, res) => {
  connection.query("select* from product", (err, rows, fields) => {
    if (!err) {
      return res.status(200).json({
        data: rows,
      });
    } else {
      console.log("There was error in getting data");
      return res.send("There was error in getting data");
    }
  });
});
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
var port = process.env.PORT || 9005;
app.listen(port, () => {
  console.log("server is running" + port);
});
