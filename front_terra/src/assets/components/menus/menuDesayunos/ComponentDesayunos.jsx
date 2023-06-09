
import {useState,useEffect, useContext} from 'react'
import { FetchDatas,MapMenus } from '../../basesComponents/BaseComponent';
import { MenuNullContext } from '../../FatherComponent';
import { LoadingMenu } from '../loadings/LoadingMenu';

export const ComponentDesayunos=()=>{
  const [menuData, setMenuData] = useState(null); 
  const {MenuNull, setMenuNull} =useContext(MenuNullContext);



  useEffect(()=>{
    
    if(menuData===null){
      setMenuNull(true)
    }
    else{
      setMenuNull(false)
    }
  },[menuData])

  

    

useEffect(() => {
  const fetchData = async () => {
    const URLfetch = "http://localhost:5080/desayunos"
    try {
      const response = await FetchDatas(URLfetch);
      setMenuData(response);
      console.log(response)
    } catch (error) {
      console.error("Error:", error);
    }
  };
  fetchData()
  return ()=>{
    
  }
}, []);


return (
  <div>
    <h4>Desayunos</h4>
    {MenuNull && <LoadingMenu />}
    <MapMenus menuData={menuData} />
  </div>
);
}


