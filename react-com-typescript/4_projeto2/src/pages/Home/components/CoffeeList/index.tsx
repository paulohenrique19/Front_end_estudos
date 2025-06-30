import { 
    CoffeeListContainer,
    Title,
    Coffees,
    SearchContainer,
    ButtonContainer
} from "./styles.ts";
import { Produto } from "../../../../interfaces/Produto.ts"
import { Coffee } from "../Coffee/index.tsx"
import { useState } from "react";

interface CoffeeListProps {
    produtos: Produto[];
}

export const CoffeeList = ({ produtos }: CoffeeListProps) => {
  const [search, setSearch] = useState<string>("");
  const [sortCriteria, setSortCriteria] = useState<"nome" | "preco" | null>(null);

  const filteredProducts = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(search.toLowerCase()) || 
    produto.categoria?.some((categoria) => categoria.toLowerCase().includes(search.toLowerCase())) ||
    produto.descricao?.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortCriteria === "nome") {
      return a.nome.localeCompare(b.nome);
    }
    if (sortCriteria === "preco") {
      return a.preco - b.preco;
    }
    return 0;
  });


  return (
    <CoffeeListContainer>
        <Title>Nossos cafés</Title>

        <SearchContainer>
          <input
            type="text"
            placeholder="Buscar por nome, categoria ou descrição"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <ButtonContainer>
            <button onClick={() => setSortCriteria("nome")}>Ordenar por Nome</button>
            <button onClick={() => setSortCriteria("preco")}>Ordenar por Preço</button>
          </ButtonContainer>
        </SearchContainer>

        <Coffees>
        {sortedProducts.map((produto) => (
          <Coffee key={produto.id} produto={produto} />
        ))}        
        </Coffees>
    </CoffeeListContainer>
  );
};
