import { useState, useEffect } from "react";
const Menus = () => {
  const [menus, setMenus] = useState([]);

  const petidata = async () => {
    try {
      const datafetch = await fetch("");
      const res = await datafetch.json();
      setMenus(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const esperardatos = async () => {
      await petidata();
      console.log(menus);
    };
    esperardatos();
  }, []);
}

export default Menus;
