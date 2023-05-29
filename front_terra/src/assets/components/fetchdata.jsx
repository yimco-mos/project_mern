export const fetchdata = async()=>{
    const response = await fetch("http://localhost:5080/menus");
    const data = await response.json();
    return data;
  
  }
 