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
  const sqlInsert = "INSERT INTO Cards (`username`, `date`, `finishedTime`, `score`, `item`, `numberOfItems`, `actualCardData`, `memorizedCardData`, `numberOfCorrectlyMemorizedItems`, `numberOfIncorrectlyMemorizedItems`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.date,
    req.body.finishedTime,
    req.body.score,
    req.body.item,
    req.body.numberOfItems,
    req.body.actualCardData,
    req.body.memorizedCardData,
    req.body.numberOfCorrectlyMemorizedItems,
    req.body.numberOfIncorrectlyMemorizedItems,
  ];

  db.query(sqlInsert, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
