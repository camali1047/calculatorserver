import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import bodyParser from "body-parser";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/bmicalculator", function (req, res) {
  const weight = Number(req.body.weight);
  const height = Number(req.body.height);
  const bmi = weight / (height * 2);

  res.send("your bmi is : " + bmi);
});

app.post("/", function (req, res) {
  // console.log(req.body.num1);
  const n1 = Number(req.body.num1);
  const n2 = Number(req.body.num2);

  res.send("result : " + (n1 + n2));
  res.end();
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.listen("3000", function () {
  console.log("server started by calculator.js");
});
