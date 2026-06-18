const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const db = new sqlite3.Database("ecommerce.db");

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT,
      password TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS products(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      price REAL
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS orders(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id INTEGER,
      product_id INTEGER
    )
  `);
});

app.post("/register", (req, res) => {
  res.json({ message: "User Registered Successfully" });
});

app.post("/products", (req, res) => {
  res.json({ message: "Product Added Successfully" });
});

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Laptop",
      price: 50000
    }
  ]);
});

app.post("/orders", (req, res) => {
  res.json({ message: "Order Created Successfully" });
});

app.listen(3000, () => {
  console.log("E-Commerce Server Running on Port 3000");
});
