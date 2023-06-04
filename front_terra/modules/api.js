import express from "express";
import cors from "cors";
import { Menu } from "../dbs.js";

const app = express();
const PORT = 5080;

app.use(cors());




//funcion principal que se encarga de mandar los menus y platos

const getDescriptions = (menus) => {
  const descriptions = {};

  menus.forEach((menu) => {
    menu.options.forEach((option) => {
      option.platos.forEach((plato) => {
        const descriptionKey = option.description;

//agregue condicional que evita repeticion de menus

        if (!descriptions[descriptionKey]) {
          descriptions[descriptionKey] = [];
        }

        const existPlato = descriptions[descriptionKey].some(existplato=>{
          return existplato.name === plato.name
        })

        if(!existPlato){
          
        descriptions[descriptionKey].push({
          name: plato.name,
          description: plato.description,
          price: plato.price
        });
        }
      });
    });
  });

  return descriptions;
};
    




app.get("/desayunos", async (req, res) => {
  try {
    const optionMenu = await Menu.find({name:"menu desayunos"});
    const platosMenus = await getDescriptions(optionMenu);
    res.json(platosMenus);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.get("/comidas", async (req, res) => {
  try {
    const optionMenu = await Menu.find({name:"menu comidas"});
    const platosMenus = await getDescriptions(optionMenu);
    res.json(platosMenus);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.get("/bebidas", async (req, res) => {
  try {
    const optionMenu = await Menu.find({name:"menu bebidas"});
    const platosMenus = await getDescriptions(optionMenu);
    res.json(platosMenus);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto", PORT);
});

