import mongoose from "mongoose";

const menuSchema = new mongoose.Schema({
  name: String,
  platos: [
    {
      name: String,
      description: String,
      price: Number,
    },
  ],
});

const Menu = mongoose.model("Menu", menuSchema);


(async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ymcontreras2000:ymcontreras2000@cluster0.llun3ti.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    const menus =  [
      
        
          {
         
            name: "menu desayunos",
            platos: [
              {
                description: "desayuna algo ligero",
                platos: [
                  {
                    name: "sandwich",
                    description:
                      "3 rebanadas de pan con jamon y queso mozzarela doradas en mantequilla y te helado",
                    price: 4000,
                  },
                  {
                    name: "tostadas francesas",
                    description:
                      "6 rebanas de pan sumergidas en huevo batido con leche y doradas con mantequilla y y canela servidas con miel y te helado",
                    price: 10000,
                  },
                  {
                    name: "patacon con queso",
                    description: "patacones con quesp costeño y te helado",
                    price: 8000,
                  },
                ],
              },
              {
                description: "desayunos con huevos",
                platos: [
                  {
                    name: "huevos revueltos",
                    description:
                      "acompañados de patacon, arepa o pan y té helado",
                    price: 8000,
                  },
                  {
                    name: "huevos pericos",
                    description:
                      "huevos con ahogado acompañados de patacon, arepa o pan y té helado",
                    price: 8000,
                  },
                  {
                    name: "huevos cacerola",
                    description:
                      "huevos fritos con mantequilla en cacerola acompañados de patacon, arepa o pan y té helado",
                    price: 8000,
                  },
                  {
                    name: "huevos jamon y queso",
                    description:
                      "huevos revueltos con jamon y queso mozzarela acompañados de patacon, arepa o pan y té helado",
                    price: 8000,
                  },
                  {
                    name: "omelette sencillo",
                    description:
                      "huevos batidos con leche, jamon y queso dorados en mantequilla, pan tostado y té helado",
                    price: 8000,
                  },
                ],
              },
              {
                description: "para aguantar el día",
                platos: [
                  {
                    name: "calentado con chorizo, cerdo o pechuga",
                    description:
                      "frijoles con arroz, y ahogado acompañados de huevo al gusto, chorizo, lomo de cerdo o pechuga de pollo, arepa o patacon y té helado.",
                    price: 16000,
                  },
                  {
                    name: "combo terracita 1",
                    description:
                      "Huevos al gusto, chorizo de cerdo, arroz, patacones o arepa acompañado con té helado.",
                    price: 16000,
                  },
                  {
                    name: "combo terracita 2",
                    description:
                      "Huevos al gusto,pechuga de pollo, arroz, patacones o arepa acompañado con té helado.",
                    price: 16000,
                  },
                  {
                    name: "combo terracita 3",
                    description:
                      "Huevos al gusto, lomo de cerdo, arroz, patacones o arepa acompañado con té helado.",
                    price: 16000,
                  },
                  {
                    name: "combo terracita 4",
                    description:
                      "220 gr chorizo de cerdo, pechuga o lomo de cerdo, patacones o arepa acompañado con té helado.",
                    price: 16000,
                  },
                ],
              },
              {
                description: "adiciones",
                platos: [
                  { name: "patacones", price: 4000 },
                  { name: "tocineta", price: 2500 },
                  { name: "arepa", price: 1000 },
                  { name: "queso", price: 3000 },
                  { name: "chorizo", price: 4000 },
                  { name: "cerdo", price: 5000 },
                  { name: "pechuga", price: 5000 },
                  { name: "lomo de res", price: 5000 },
                  { name: "huevo", price: 2500 },
                  { name: "pan (3 tostadas)", price: 1500 },
                  { name: "ahoga´o", price: 2500 },
                  { name: "arroz", price: 2000 },
                  { name: "papas fritas", price: 4000 },
                ],
              },
            ],
          },
          

          
          {
            
           
            name: "menu comidas",
            platos: [
              {
                description: "sandwiches",
                platos: [
                  {
                    name: "sandwich de queso asado",
                    description:
                      "pan artesanal, queso mozzarella asado, vegetales encurtidos, puré de aguacate,lechuga romana, acompañado de papas a la francesa",
                    price: 12000,
                  },
                  {
                    name: "sandwich de carne asada",
                    description:
                      "pan artesanal, lomo de res,aros de cebolla apanados, lechuga crespa, queso mozzarella, acompañado de papas a la francesa",
                    price: 17000,
                  },
                  {
                    name: "sandwich pulled pork",
                    description:
                      "pan artesanal, cerdo desmechado,cebolla roja encurtida, mix de lechuga, acompañado de papas a la francesa",
                    price: 17000,
                  },
                ],
              },
              {
                description: "maicitos",
                platos: [
                  {
                    name: "maicito mixto",
                    description:
                      "maiz, pollo, lomo de res, crema de leche, queso mozzarella, papa ripio, salsas",
                    price: 20000,
                  },
                  {
                    name: "maicito terracita super",
                    description:
                      "maiz, pollo, lomo de res, chorizo, crema de leche, papa ripio, queso mozzarella, salsas",
                    price: 23000,
                  },
                ],
              },
              {
                description: "desgranados",
                platos: [
                  {
                    name: "desgranado mixto",
                    description:
                      "pollo, lomo de res, papas francesas, lechuga, tocineta, queso mozzarella, maiz, salsa, pimentones ahumados, papa ripio.",
                    price: 20000,
                  },
                  {
                    name: "desgranado terracitasuper",
                    description:
                      "pollo, lomo de res, butifarra, chorizo, papas francesas, lechuga, tocineta, queso mozzarella, maiz, cebolla grillé, chimibarbacoa, papa ripio.",
                    price: 23000,
                  },
                  {
                    name: "desgranado suipork",
                    description:
                      "lomo de cerdo en bbq dulce, salchicha suiza, maiz, polvo de tocineta, papas francesas, pimenton confitado, lechuga, papa ripio, queso mozarrella y salsa tártara",
                    price: 23000,
                  },
                ],
              },
              {
                description: "linea mexico",
                platos: [
                  {
                    name: "fajitas de alambre",
                    description:
                      "torillas de harina, cerdo al pastor, queso mozzarella, piña caramelizada, pimentones, chiles, cebolla blanca papas francesas, lechuga, tocineta, queso mozzarella, maiz, salsa, pimentones ahumados, papa ripio.",
                    price: 20.0,
                  },
                  {
                    name: "nachos con carne",
                    description:
                      "nahos, carne molida, frijol refrito, pico de gallo, guacamole, salsa de queso cheddar, pasta de tomate, cilantro.",
                    price: 17000,
                  },
                  {
                    name: "quesadilla pulled pork",
                    description:
                      "torillas de harina, pollo desmechado, queso mozzrella, pasta de tomate, guacamole y pico de gallo.",
                    price: 17000,
                  },
                  {
                    name: "quesadilla de pollo con champiñones",
                    description:
                      "torillas de harina, pollo desmechado, queso mozzrella, champiñones, pasta de tomate, guacamole y pico de gallo.",
                    price: 17000,
                  },
                  {
                    name: "quesadilla de carne",
                    description:
                      "torillas de harina, carne molida, queso mozzrella, pasta de tomate, cebolla caramelizada, guacamole y pico de gallo.",
                    price: 17000,
                  },
                  {
                    name: "quesadilla tres quesos",
                    description:
                      "torillas de harina, mix de queso mozzrella, queso americano y queso costeño, papa ripio, guacamole y pico de gallo.",
                    price: 11000,
                  },
                ],
              },
              {
                description: "platillos bbq",
                platos: [
                  {
                    name: "costillas bbq",
                    description:
                      "500 gramos de costilla de cerdo acompañados con casquitos de papas y salsa de la casa",
                    price: 25000,
                  },
                  {
                    name: "costillas bbq",
                    description:
                      "6 unidades acompañados con casquitos de papas y salsa de la casa",
                    price: 15000,
                  },
                ],
              },
              {
                description: "picadas",
                platos: [
                  {
                    name: "picada mixta",
                    description:
                      "lomo de res, cerdo, pechuga y chorizo acompañado de papa criolla y patacones, y salsas de la casa",
                    price: 25000,
                  },
                  {
                    name: "picada la terracita",
                    description:
                      "costillas de cerdo bbq, chorizo, morzilla, papa criolla y salsas de la casa",
                    price: 15000,
                  },
                ],
              },
            ],
          },


          {
        
            name: "menu bebidas",
          platos: [
              { name: "té helado", price: 1000 },
              { name: "café con leche", price: 2500 },
              { name: "café negro", price: 2000 },
              { name: "chocolate con leche", price: 2500 },
              { name: "chocolate en agua", price: 2000 },
              { name: "cocacola", price: 3500 },
              { name: "agua", price: 3000 },
              { name: "gatorade", price: 5000 },
              { name: "cuatro", price: 3500 },
              { name: "kola", price: 3500 },
              { name: "gaseosa postobon", price: 3000 },
              { name: "coca cola 1.5L", price: 7000 },
              { name: "gaseosa litro", price: 4000 },
              { name: "ginger", price: 3000 },
              { name: "soda", price: 3000 },
              { name: "zen", price: 3000 },
              { name: "saviloe", price: 3000 },
              { name: "energizante", price: 3000 },
              { name: "hit", price: 3500 },
            ],
          },
        
      
        ]

        const result = await Menu.create(menus);

        console.log(`${result.length} documents inserted`);
      } catch (error) {
        console.error("Error:",error);
      } finally {
        mongoose.connection.close();
      }
    })();

    export default Menu 