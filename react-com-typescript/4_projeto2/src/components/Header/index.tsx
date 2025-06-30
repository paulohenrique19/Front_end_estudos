import { 
  HeaderContainer, 
  Logo, 
  Local, 
  CartIcon,
  CartImage, 
  Separator,
  CartItemCount,  
} from "./styles";

import { NavLink } from 'react-router-dom'
import { useCart } from "../../contexts/CartContext";

function ConvertStateToUF(state: string | undefined): string | undefined {
  if (state === "Acre") return "AC";
  if (state === "Alagoas") return "AL";
  if (state === "Amazonas") return "AM";
  if (state === "Bahia") return "BA";
  if (state === "Ceará") return "CE";
  if (state === "Distrito Federal") return "DF";
  if (state === "Espírito Santo") return "ES";
  if (state === "Goiás") return "GO";
  if (state === "Maranhão") return "MA";
  if (state === "Mato Grosso") return "MT";
  if (state === "Mato Grosso do Sul") return "MS";
  if (state === "Minas Gerais") return "MG";
  if (state === "Pará") return "PA";
  if (state === "Paraíba") return "PB";
  if (state === "Paraná") return "PR";
  if (state === "Pernambuco") return "PE";
  if (state === "Piauí") return "PI";
  if (state === "Rio de Janeiro") return "RJ";
  if (state === "Rio Grande do Norte") return "RN";
  if (state === "Rio Grande do Sul") return "RS";
  if (state === "Rondônia") return "RO";
  if (state === "Roraima") return "RR";
  if (state === "Santa Catarina") return "SC";
  if (state === "São Paulo") return "SP";
  if (state === "Sergipe") return "SE";
  if (state === "Tocantins") return "TO";

  return undefined; 
}


export const Header = () => {
  const { state, address } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Menu">
        <Logo/>
      </NavLink>
      <Separator>
        <Local>
          <img src="src/assets/images/Home/LocalIcon.svg" alt="" />
          <p>{address?.cidade},&nbsp;</p>
          <p>{ConvertStateToUF(address?.estado)}</p>
        </Local>
        <NavLink to="/payment" title="Pagamento">
          <CartIcon>
            <CartItemCount>{state.totalItems}</CartItemCount>  
            <CartImage />
          </CartIcon>
        </NavLink>
      </Separator>
    </HeaderContainer>
  );
};
