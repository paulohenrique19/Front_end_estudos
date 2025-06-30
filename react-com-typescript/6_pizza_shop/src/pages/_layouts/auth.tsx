import { Outlet } from "react-router-dom";
import { Container, ContainerChild, Copyright, LoginContainer, Logo, NameLogo } from "./styles/auth_styles"
import { Pizza } from "lucide-react";


export function AuthLayout() {
  return (
    <Container>
        <ContainerChild>
          <Logo>
            <Pizza className="h-5 w-5"/>
            <NameLogo>pizza.shop</NameLogo>
          </Logo>
          <Copyright>
            Painel do parceiro &copy; pizza.shop - {new Date().getFullYear}
          </Copyright>
        </ContainerChild>

        <LoginContainer>
          <Outlet />
        </LoginContainer>
    </Container>
  );
}
