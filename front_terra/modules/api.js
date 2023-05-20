import Menu from "../dbs.js";
import cors from "cors";
import router from "./routes.js";
import express from 'express'
const app = express();
const PORT = 5080;

app.use(cors());
app.use("/", router);

app.get('/inicio', (req, res) => {
  res.send('hola mundo desde inicio');
});

app.get("/menus", async (req, res) => {
  try {
    const menus = await Menu.find({});
    res.send(menus);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json('Error en el sistema');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});