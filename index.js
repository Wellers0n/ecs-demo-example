// Importar as dependências
const express = require("express");
require('dotenv').config()

// Criar uma instância do Express
const app = express();
const port = process.env.PORT || 80; // Porta em que o servidor irá rodar

// Definir uma rota básica
app.get("/", (req, res) => {
  res.status(200).json({ message: `server is running ${process.env.HOST}` });
});

// Definir outra rota
app.get("/about", (req, res) => {
  res.status(200).json({ message: `Page about express. ${process.env.TEST}` });
});

app.get("/test", (req, res) => {
  res.status(200).json({ message: `Page test express. ${process.env.TEST}` });
});

app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.status(200).json({ message: `user profile with ID ${userId}` });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});
