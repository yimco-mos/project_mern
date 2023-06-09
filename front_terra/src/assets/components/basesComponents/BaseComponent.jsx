// llamadofetch a los nombres del menu
export const FetchDatas = async (url) => {
    const dbUrl = await fetch(url);
    const result = await dbUrl.json();
    return result;
  };

//funcion global para traer platos de los menus 

export const MapPlatos =({items})=>{


  return (
    <ul>
    {items.map((item) => (
      <li key={item.name}>
        <p>Name: {item.name}</p>
        <p>Description: {item.description}</p>
        <p>Price: {item.price}</p>
      </li>
    ))}
  </ul>
  )

}

export const MapMenus =({menuData})=>{
  return(

      <>
       { menuData &&
      Object.entries(menuData).map(([menuName, items]) => (
        <div key={menuName}>
          <h3>{menuName}</h3>
        <MapPlatos items={items}/>
        </div>
      ))}</>

  )

}