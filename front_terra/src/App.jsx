import "./assets/styles/App.css";
import { LogicHeader } from "./assets/components/LogicHeader";
import { MenuProvider } from "./assets/components/LogicHeader";

function App() {
  return (
    <MenuProvider>
      <LogicHeader />
    </MenuProvider>
  );
}

export default App;
