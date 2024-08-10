import express from "express";
const app = express();
const porta = 3000;
const cors = require("cors");
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173/", optionsSuccessStatus: 200 }));
app.get();

app.listen(porta, () => {
  console.log("meu serviço esta subindo");
});
