import  { useContext, useEffect } from 'react'
import { MapMenus } from '../../basesComponents/BaseComponent'
import { MenuNullContext } from '../../FatherComponent';


export const Comidas = () => {
  
  useEffect(()=>{},[])

  const {MenuNull, setMenuNull} =useContext(MenuNullContext);
  return (
    <div>
      <h4>comidas </h4>
      {MenuNull && LoadingMenu}

  <div>
  </div>

    </div>
  )
}
