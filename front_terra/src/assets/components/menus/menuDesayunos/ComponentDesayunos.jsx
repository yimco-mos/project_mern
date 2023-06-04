import { useContext, createContext, useEffect, useState } from "react";
import { PlatosDesayunos } from "./PlatosDesayunos";

// Guardar estados en los hooks Context
export const DesayunosContext = createContext();

export const DesayunosProvider = ({ children }) => {
  const [desayunos, setDesayunos] = useState([]);

  return (
    <DesayunosContext.Provider value={{ desayunos, setDesayunos }}>
      {children}
    </DesayunosContext.Provider>
  );
};

// Menús de desayunos: petición fetch
const FetchDesayunos = async () => {
  try {
    const response = await fetch("http://localhost:5080/desayunos");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const LogicDesayunos = () => {
  const { desayunos, setDesayunos } = useContext(DesayunosContext);
  const menusDesayunos = desayunos.platos || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data_fetch = await FetchDesayunos();
        setDesayunos(data_fetch);
      } catch (err) {
        console.log(err, "Hubo un error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="componentDesayunos">
      <ul className="componentUl">
        <span className="componentSpan">
          {menusDesayunos.map((platoDes) => {
            return (
              <li className="Link" key={platoDes._id}>
                {platoDes.description}
              </li>
            );
          })}
        </span>
      </ul>
      <PlatosDesayunos />
    </div>
  );
};
