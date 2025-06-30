import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Validação do formulário de busca
const searchFormSchema = z.object({
  query: z.string().min(1, "A busca deve ter ao menos 1 caractere"),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

interface SearchFormProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>; 
}

export function SearchForm({ setSearchQuery }: SearchFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });

  
  function handleSearchTransaction(data: SearchFormInputs) {
    setSearchQuery(data.query); 
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Busque por transações"
        {...register("query")}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
