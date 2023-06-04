import { Desayunos } from "./menus/menuDesayunos/Desayunos";
import { Comidas } from "./menus/menuComidas/Comidas";
import { Bebidas } from "./menus/menuBebidas/Bebidas";
import { Route, Link, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Menumovil } from "./Menumovil";
import { useContext, createContext, useState, useEffect } from "react";
import "../styles/stylesHeader.css";

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
  const [headervisible, setHeadervisible] = useState(true);
  const { menuMovil, setMenuMovil } = useContext(MenuContext);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {

    if (window.innerHeight > 90) {
      setHeadervisible(false);
    } else {
      setHeadervisible(true);
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 610) {
      setMenuMovil(false);
    }
  };

  return (
    <div>
      <header className={headervisible ? "visible" : "hidden"}>
        <div className="Headercss">
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
         
        
         
         <span> 
           <Link to="/" className="Link" >

          <h3>Terracita </h3> </Link>
          <i className="fa-sharp fa-light fa-house-blank"></i>
      
        

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
      </header>
      {menuMovil && <Menumovil />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/desayunos" element={<Desayunos />} />
        <Route exact path="/comidas" element={<Comidas />} />
        <Route exact path="/bebidas" element={<Bebidas />} />
      </Routes>
    </div>
  );
};
