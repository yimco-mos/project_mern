import { useContext, useEffect, useState } from "react";
import { DesayunosContext } from "./ComponentDesayunos";

export const PlatosDesayunos = () => {
  const { desayunos } = useContext(DesayunosContext);

    const [platos, setPlatos ]=useState([])
  useEffect(() => {
    handlePlatos()
  }, [desayunos]);

  const handlePlatos = () => {
    const menuPlatos = desayunos || [];
    
    setPlatos(menuPlatos);
    
    console.log(platos);
  };
  return (
    <div>
      <ul>
        
     
      </ul>
    </div>
  );
};