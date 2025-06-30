import { useCart } from "../../../../contexts/CartContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, FormContainer, Input, Button, CartContainer, CartItem, Separator } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Enum para representar as formas de pagamento
enum PaymentMethod {
  CASH = 1,
  CREDIT_DEBIT_CARD = 2,
  PIX = 3,
}

export const AddressSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  rua: z.string().min(1, "Rua é obrigatória"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  cep: z.string().min(1, "CEP é obrigatório"),
  formaPagamento: z.nativeEnum(PaymentMethod, {
    errorMap: () => ({ message: "Forma de pagamento é obrigatória" }),
  }),
});

export type AddressFormData = z.infer<typeof AddressSchema>;


export const handleOnSubmit = (data: AddressFormData) => {
  console.log("Dados do formulário:", data);
};


export const  FormAddress = () => {
  const { state, dispatch } = useCart();
  const [cartQuantities, setCartQuantities] = useState<{ [key: string]: number }>({});
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<AddressFormData>({
    resolver: zodResolver(AddressSchema),
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null); 

  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    state.items.forEach(item => {
      initialQuantities[item.produto.id] = item.quantidade;
    });
    setCartQuantities(initialQuantities);
  }, [state.items]);

  const navigate = useNavigate();

  const handleOnSubmit = (data: AddressFormData) => {
    const hasErrors = Object.keys(errors).length > 0;
  
    if (!hasErrors) {
      localStorage.setItem("endereco", JSON.stringify(data));
      console.log("Dados do formulário:", data);
      console.log("Forma de pagamento selecionada:", data.formaPagamento);
  
      navigate("/end"); 
    } else {
      console.log("Erro(s) no formulário:", errors);
    }
  };

  const handleAddItem = (item: any) => {
    dispatch({ type: "UPDATE_ITEM", produtoId: item.produto.id, quantidade: cartQuantities[item.produto.id] + 1 });
    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.produto.id]: (prevQuantities[item.produto.id] || 0) + 1,
    }));
  };

  const handleRemoveItem = (item: any) => {
    if (cartQuantities[item.produto.id] === 1) {
      dispatch({ type: "REMOVE_ITEM", produtoId: item.produto.id });
    } else {
      dispatch({ type: "UPDATE_ITEM", produtoId: item.produto.id, quantidade: cartQuantities[item.produto.id] - 1 });
    }

    setCartQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item.produto.id]: (prevQuantities[item.produto.id] || 0) - 1,
    }));
  };

  const handlePaymentSelect = (method: PaymentMethod) => {
    setPaymentMethod(method);
    setValue("formaPagamento", method); 
  };

  

  return (
    <Container>
      <FormContainer>
        <h2>Endereço de Entrega</h2>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          <Input
            type="text"
            placeholder="Nome Completo"
            {...register("nome", { required: true })}
          />
          {errors.nome && <span>Nome é obrigatório</span>}

          <Input
            type="text"
            placeholder="Rua"
            {...register("rua", { required: true })}
          />
          {errors.rua && <span>Rua é obrigatória</span>}

          <Input
            type="text"
            placeholder="Cidade"
            {...register("cidade", { required: true })}
          />
          {errors.cidade && <span>Cidade é obrigatória</span>}

          <Input
            type="text"
            placeholder="CEP"
            {...register("cep", { required: true })}
          />
          {errors.cep && <span>CEP é obrigatório</span>}

          <Separator>
            <Button
              type="button"
              onClick={() => handlePaymentSelect(PaymentMethod.CASH)}
              style={{ backgroundColor: paymentMethod === PaymentMethod.CASH ? "#007BFF" : "#ccc" }}
            >
              Dinheiro
            </Button>
            <Button
              type="button"
              onClick={() => handlePaymentSelect(PaymentMethod.CREDIT_DEBIT_CARD)}
              style={{ backgroundColor: paymentMethod === PaymentMethod.CREDIT_DEBIT_CARD ? "#007BFF" : "#ccc" }}
            >
              Cartão de Crédito/Débito
            </Button>
            <Button
              type="button"
              onClick={() => handlePaymentSelect(PaymentMethod.PIX)}
              style={{ backgroundColor: paymentMethod === PaymentMethod.PIX ? "#007BFF" : "#ccc" }}
            >
              Pix
            </Button>
            {errors.formaPagamento && <span>Forma de pagamento é obrigatória</span>}
          </Separator>
          <Button type="submit">Confirmar Endereço</Button>
        </form>
      </FormContainer>

      <CartContainer>
        <h2>Itens no Carrinho</h2>
        {state.items.map(item => (
          <CartItem key={item.produto.id}>
            <img src={item.produto.imagemUrl} alt={item.produto.nome} />
            <div>
              <p>{item.produto.nome}</p>
              <span>Quantidade: {cartQuantities[item.produto.id] || 0}</span> {/* Exibe a quantidade do item */}
              <span>R$ {item.produto.preco.toFixed(2)}</span>
              <Button className="add" onClick={() => handleAddItem(item)}>Adicionar</Button>
              <Button className="remove" onClick={() => handleRemoveItem(item)}>Remover</Button>
            </div>
          </CartItem>
        ))}
        Preço total: R$ {state.totalValue.toFixed(2)}
      </CartContainer>
    </Container>
  );
};

export default FormAddress;
