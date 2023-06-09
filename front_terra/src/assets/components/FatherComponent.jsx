import { MenuProvider } from "./LogicHeader";
import { SonComponent } from "./SonComponent";
import { createContext,useState } from "react";

export const MenuNullContext = createContext();

const MenuNullProvider = ({ children }) => {
  const [MenuNull, setMenuNull] = useState(false);

  return (
    <MenuNullContext.Provider value={{ MenuNull, setMenuNull }}>
      {children}
    </MenuNullContext.Provider>
  );
};

export const FatherComponent = () => {
  return (
    <MenuProvider>
      <MenuNullProvider>
        <SonComponent />
        <footer>
          <h3>footer</h3>
        </footer>
      </MenuNullProvider>
    </MenuProvider>
  );
};
