import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />{" "}
      {/*Outlet: Espaço pra ser inserido um conteúdo específico de uma página*/}
    </LayoutContainer>
  );
};
