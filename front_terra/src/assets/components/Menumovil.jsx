import { Link } from "react-router-dom";
import "../styles/styleMovil.css";
import { useContext } from "react";
import { MenuContext } from "../components/LogicHeader";

export const Menumovil = () => {
  const { menuMovil, setMenuMovil } = useContext(MenuContext);
  const renderMovil = () => {
    return (
        <div className="edit_movil">
          <nav>
            <ul>
              <li>
                <Link
                  onClick={() => setMenuMovil(false)}
                  className="link_movil"
                  to="/desayunos"
                >
                  menú desayunos
                </Link>
              </li>
              <li>
                <Link
                
                onClick={() => setMenuMovil(false)}
                 className="link_movil" to="/comidas">
                  menú Comidas
                </Link>
              </li>

              <li>
                <Link
                  onClick={() => setMenuMovil(false)}
                  className="link_movil"
                  to="/bebidas"
                >
                  menú bebidas
                </Link>
                <i className="fa-sharp fa-light fa-cup-straw"></i>
              </li>
            </ul>
          </nav>
        </div>
    
    );
  };

  return(
    <div className="menu_movil">{ menuMovil && renderMovil()}
    </div>
    );
};
