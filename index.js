const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.status("200").json({ message: "Bem vindos a nossa API de times, cervejas e petiscos." });
});

const cervejasRouter = require("./cervejas");
app.use("/", cervejasRouter);

const petiscosRouter = require("./petiscos");
app.use("/", petiscosRouter);

const timesRouter = require("./times");
app.use("/", timesRouter);

app.listen(port, () => {
  console.info(`App rodando em: http://localhost:${port}`);
});
