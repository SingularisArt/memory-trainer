import express from "express";
import cors from "cors";
import mysql from "mysql";

import { host, username, password } from "./info.js";

const app = express();

const db = mysql.createConnection({
  host: host,
  user: username,
  password: password,
  database: "memory_trainer",
});

app.use(express.json());
app.use(cors());

app.listen(8800, () => {
  console.log("Server started!");
});

app.get("/cards", (_req, res) => {
  const sqlSelect = "SELECT * FROM Cards";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.post("/cards", (req, res) => {
  const sqlInsert = "INSERT INTO Cards (`username`, `date`, `finished_time`, `score`, `item`, `number_of_items`, `actual_card_data`, `memorized_card_data`, `number_of_correctly_memorized_items`, `number_of_incorrectly_memorized_items`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.date,
    req.body.finished_time,
    req.body.score,
    req.body.item,
    req.body.number_of_items,
    req.body.actual_card_data,
    req.body.memorized_card_data,
    req.body.number_of_correctly_memorized_items,
    req.body.number_of_incorrectly_memorized_items,
  ];

  db.query(sqlInsert, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.get("/images", (_req, res) => {
  const sqlSelect = "SELECT * FROM Images";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/international-names", (_req, res) => {
  const sqlSelect = "SELECT * FROM InternationalNames";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/names", (_req, res) => {
  const sqlSelect = "SELECT * FROM Names";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/numbers", (_req, res) => {
  const sqlSelect = "SELECT * FROM Numbers";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});

app.get("/words", (_req, res) => {
  const sqlSelect = "SELECT * FROM Words";
  db.query(sqlSelect, (err, result) => {
    if (err) return res.json(err);
    return res.json(result);
  });
});
