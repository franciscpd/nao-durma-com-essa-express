const express = require("express");

const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(routes);

app.use((req, res, next) => {
  res.status(404).json({ erro: "Opss :(, a página não foi encontrada" });
  next();
});

app.listen(3000, () => {
  console.log("O servidor está rodando na porta: 3000");
});