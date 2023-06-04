import {  LogicDesayunos, DesayunosProvider } from "./ComponentDesayunos";

export const Desayunos = () => {
  return (
    <DesayunosProvider>
      <div>
        <h3>Desayunos</h3>
        <LogicDesayunos />
      </div>
    </DesayunosProvider>
  );
};
