import express from "express";
import  Menu  from "../dbs.js";

const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Hola mundo desde inicio");
});
  
router.get("/Terracita", async (req, res) => {
  const menus = await Menu.findOne({ name: "menus" });
  res.json(menus);
});

export default router;
