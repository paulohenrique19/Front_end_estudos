import React, { createContext, useContext, useReducer, ReactNode, useState, useEffect } from "react";
import { Produto } from "../interfaces/Produto";
import { Localizacao } from "../interfaces/Localizacao";

interface CartItem {
  produto: Produto;
  quantidade: number;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalValue: number;  
}


type Action =
  | { type: "ADD_ITEM"; produto: Produto }
  | { type: "REMOVE_ITEM"; produtoId: number }
  | { type: "UPDATE_ITEM"; produtoId: number; quantidade: number };


const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalValue: 0,  
};


const calculateTotalValue = (items: CartItem[]): number => {
  return items.reduce((acc, item) => acc + item.produto.preco * item.quantidade, 0);
};


const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItem = state.items.find(item => item.produto.id === action.produto.id);
      let updatedItems;
      if (existingItem) {
        
        updatedItems = state.items.map(item =>
          item.produto.id === action.produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      } else {
        
        updatedItems = [...state.items, { produto: action.produto, quantidade: 1 }];
      }
      
      
      const totalItems = updatedItems.reduce((acc, item) => acc + item.quantidade, 0);
      const totalValue = calculateTotalValue(updatedItems);

      return { ...state, items: updatedItems, totalItems, totalValue };

    case "REMOVE_ITEM":
      const filteredItems = state.items.filter(item => item.produto.id !== action.produtoId);
      
      
      const totalItemsAfterRemoval = filteredItems.reduce((acc, item) => acc + item.quantidade, 0);
      const totalValueAfterRemoval = calculateTotalValue(filteredItems);

      return { ...state, items: filteredItems, totalItems: totalItemsAfterRemoval, totalValue: totalValueAfterRemoval };

    case "UPDATE_ITEM":
      const updatedItemsForQuantity = state.items.map(item =>
        item.produto.id === action.produtoId
          ? { ...item, quantidade: action.quantidade }
          : item
      );

      
      const totalItemsAfterUpdate = updatedItemsForQuantity.reduce((acc, item) => acc + item.quantidade, 0);
      const totalValueAfterUpdate = calculateTotalValue(updatedItemsForQuantity);

      return { ...state, items: updatedItemsForQuantity, totalItems: totalItemsAfterUpdate, totalValue: totalValueAfterUpdate };

    default:
      return state;
  }
};


const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<Action>;
  address: Localizacao | null;
} | undefined>(undefined);




export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);


  const [address, setAddress] = useState<Localizacao | null>(null);
  const [error, setError] = useState<string | null>(null);

  const apiKey = 'a2b4a6998ede4d98b16a6d8263b9bfdd'; 

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
       ;
          fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=pt&countrycode=BR`
          )
            .then((response) => response.json())
            .then((data) => {
              const result = data.results[0];
              if (result) {
                const cidade = result.components.city || result.components.town || result.components.village;
                const estado = result.components.state;

                setAddress({ cidade, estado });

              } else {
                setError('Localização não encontrada.');
              }
            })
            .catch((err) => {
              setError('Erro ao consultar a API: ' + err.message);
            });
        },
        (err) => {
          setError('Erro ao obter a localização: ' + err.message);
        }
      );
    } else {
      setError('Geolocation não é suportado neste navegador.');
    }
  }, []);
  



  return (
    <CartContext.Provider value={{ state, dispatch, address }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
