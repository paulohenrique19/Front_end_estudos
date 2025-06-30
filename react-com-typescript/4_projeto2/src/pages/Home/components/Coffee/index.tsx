import { useState, useEffect } from "react";
import { useCart } from "../../../../contexts/CartContext"; 
import { Produto } from "../../../../interfaces/Produto";
import { 
  CoffeeContainer, 
  Label,
  Descricao,
  Separator,
  Preco, 
  AddRemove,
  ConfirmAdd,
  ShoppingCartSimple
} from "./styles";

const url = "https://economia.awesomeapi.com.br/last/USD-BRL";

interface CoffeeProps {
  produto: Produto;
}

export const Coffee = ({ produto }: CoffeeProps) => {
  const [CartItemQuantity, setCartItemQuantity] = useState(0);
  const [dolarValue, setDolarValue] = useState<number | null>(null); 
  const { state, dispatch } = useCart(); 

  
  const fetchDolarValue = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      const value = parseFloat(data.USDBRL.bid);
      setDolarValue(value); 
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  
  useEffect(() => {
    fetchDolarValue();
    const interval = setInterval(() => {
      fetchDolarValue(); 
    }, 10000);

    return () => clearInterval(interval); 
  }, []);

  
  const produtoComPrecoConvertido = { 
    ...produto, 
    preco: dolarValue ? produto.preco * dolarValue : produto.preco
  };

  const handleAddItem = () => {
    dispatch({ type: "ADD_ITEM", produto: produtoComPrecoConvertido });
    setCartItemQuantity(CartItemQuantity + 1); 
  };

  const handleRemoveItem = () => {
    if (CartItemQuantity > 0) {
      dispatch({ type: "UPDATE_ITEM", produtoId: produtoComPrecoConvertido.id, quantidade: CartItemQuantity - 1 });
      setCartItemQuantity(CartItemQuantity - 1); 
    }
  };

  return (
    <CoffeeContainer>
      <img src={produto.imagemUrl} alt={produto.nome} />
      <Label>
        {produto.categoria?.map((pdr, index) => (
          <p key={index}>{pdr.toUpperCase()}</p>
        ))}
      </Label>
      <h2>{produto.nome}</h2>
      <Descricao>
        <p>{produto.descricao}</p>
      </Descricao>
      <Separator>
        <Preco>
          <p>R$</p>
          <p>{produtoComPrecoConvertido.preco.toFixed(2)}</p> 
        </Preco>
        <AddRemove>
          <p onClick={handleAddItem}>+</p>
          <p>{CartItemQuantity}</p>
          <p onClick={handleRemoveItem}>-</p>
        </AddRemove>
      </Separator>
    </CoffeeContainer>
  );
};
