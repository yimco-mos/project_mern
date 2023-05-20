import { Menu } from "../dbs.js";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";

const app = express();
const PORT = 5080;

app.use(cors());

app.get("/inicio", (req, res) => {
  res.send("Hola mundo desde inicio");
});

app.get("/menus", async (req, res) => {
  try {
    const menus = await Menu.find(); // Suponiendo que hay un método "find()" en Menu para obtener los datos del menú
    res.send(menus);
  } catch (error) {
    console.error("Error:", error);
    console.log("Error en el sistema");
  } finally {
    mongoose.connection.close();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});