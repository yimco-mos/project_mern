import { ComponentDesayunos} from "./menus/menuDesayunos/ComponentDesayunos";
import { Comidas } from "./menus/menuComidas/Comidas";
import { Bebidas } from "./menus/menuBebidas/bebidas";
import { Route, Link, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Menumovil } from "./Menumovil";
import { useContext, createContext, useState, useEffect } from "react";
import "../styles/styleHeader.css";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuMovil, setMenuMovil] = useState(false);

  return (
    <MenuContext.Provider value={{ menuMovil, setMenuMovil }}>
      {children}
    </MenuContext.Provider>
  );
};

export const LogicHeader = () => {
  const { menuMovil, setMenuMovil } = useContext(MenuContext);

  useEffect(() => {

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const handleResize = () => {
    if (window.innerWidth > 610) {
      setMenuMovil(false);
    }
  };

  return (
    <>
      <header >
        <div className="Headercss">

          <div className="content_header">
    
          <div className="header_logo">
            <div className="imageLogo"></div>
          </div>

          <div className="header_mesage">
            <span className="home_header">
              <Link className="Link" to="/">
                <h6>terracita</h6>
              </Link>
            </span>
            <div className="activate_home">
         
        
         
         <span className="span_home_activate" onClick={()=>{setMenuMovil(false)}}> 
           <Link to="/" className="activate_home" >

           <i className="fa-solid fa-house "></i>
         </Link>

       </span>
       
      
            </div>
          </div>

          <div className="li_header">
            <nav>
              <ul>
                <li>
                  <Link className="Link" to="/desayunos">
                    menu desayunos  
         
                  </Link>
                </li>
                <li>
                  <Link className="Link" to="/comidas">
                    menu Comidas
                  </Link>
                </li>

                <li>
                  <Link className="Link" to="/bebidas">
                    menu bebidas
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div  className="activate">
            <button onClick={() => setMenuMovil(e=>!e)}>
              <i className="fa-solid fa-burger"></i>
            </button>
          </div>

          </div>
        </div>
      </header>
      {menuMovil && <Menumovil />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/desayunos" element={<ComponentDesayunos />} />
        <Route exact path="/comidas" element={<Comidas />} />
        <Route exact path="/bebidas" element={<Bebidas />} />
      </Routes>
    </>
  );
};
