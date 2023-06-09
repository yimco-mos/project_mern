import { useState } from "react";
import "../styles/styleHome.css";

export const Home = () => {
  const [stateInput, setStateInput] = useState([]);
  const handleChange = (e) => {
    setStateInput(e.target.value);
    console.log(stateInput);
  };




  return (
    <div className="Home_content_cover">
        <div className="content_all">
          <div className="content_menu">
            <div className="title_menu">
              <h4>
                cocinar es nuestro placer
                <br /> &<br />
                tus pedidos son nuestra prioridad
              </h4>
            </div>


            <div className="form_menu">
              <form>
                <label htmlFor="pedido">Pedido</label>
                <br />
                <input
                  type="text"
                  id="pedido"
                  onChange={handleChange}
                  value={stateInput}
                  placeholder="pedidos"
                />
              </form>
            </div>
          </div>
        </div>
    </div>
  );
};
