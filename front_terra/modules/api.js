import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import { Menu } from "../dbs.js";

const app = express();
const PORT = 5080;

app.use(cors());

app.get("/inicio", (req, res) => {
  res.send("Hola mundo desde inicio");
});

app.get("/menus", async (req, res) => {
  try {
    const uniqueMenus = await Menu.distinct("name");
    res.json(uniqueMenus);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en el sistema");
  }
});

app.get("/desayunos", async (req, res) => {
  try {
    const desayunos = await Menu.findOne({ name: "menu desayunos" });
    if (desayunos && desayunos.platos) {
      const platosDesayuno = desayunos.platos;
      res.json(platosDesayuno);
    } else {
      res.json([]); // If the breakfast menu is not found or has no dishes, an empty array is returned
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en el sistema");
  }
});



app.get("/comidas", async (req, res) => {
  try {
    const comidas = await Menu.findOne({ name: "menu comidas" });
    if (comidas && comidas.platos) {
      const platosComidas = comidas.platos;
      res.json(platosComidas);
    } else {
      res.json([]); // If the breakfast menu is not found or has no dishes, an empty array is returned
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error en el sistema");
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});