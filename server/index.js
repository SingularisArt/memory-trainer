import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "SingularisArt",
  password: "101!)!Hashem mariadbsingularis Hashem!)!101",
  database: "memory_trainer",
});

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.use(express.json());
app.use(cors());

app.get("/cards", (req, res) => {
  const sqlSelect = "SELECT * FROM Cards";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/images", (req, res) => {
  const sqlSelect = "SELECT * FROM Images";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/international-names", (req, res) => {
  const sqlSelect = "SELECT * FROM InternationalNames";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/names", (req, res) => {
  const sqlSelect = "SELECT * FROM Names";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/numbers", (req, res) => {
  const sqlSelect = "SELECT * FROM Numbers";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/words", (req, res) => {
  const sqlSelect = "SELECT * FROM Words";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.listen(8800, () => {
  console.log("Server started!");
});
