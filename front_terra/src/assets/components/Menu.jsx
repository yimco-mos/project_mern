import { useState, useEffect } from "react";
const Menus = () => {
const [dtMenu, setdtMenu]=useState([])

 const peticion = async()=>{
    const response = await fetch("http://localhost:5080/menus");
    const data = await response.json();
    setdtMenu(data);
  
  }

const renderMenu =()=> {  

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {dtMenu.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
    </div>
  ) }





  useEffect(() => {
    peticion();
  }, []);

    return(   
      <div>
        {renderMenu()}
      </div>
      )

  
}

export default Menus;
