import { useForm } from "react-hook-form";
import { z } from "zod";
import styled from "styled-components";

const searchInForm = z.object({
  city: z.string(),
});

type SearchInForm = z.infer<typeof searchInForm>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchInForm>({
    defaultValues: {
      city: "Chapecó",
    },
  });

  async function handleSearch(data: SearchInForm) {
    console.log(data.city);
  }

  return (
    <StyledForm onSubmit={handleSubmit(handleSearch)}>
      <StyledLabel htmlFor="city">Digite a cidade</StyledLabel>
      <StyledInput id="city" type="text" {...register("city")} />
      <StyledButton disabled={isSubmitting} type="submit">
        {isSubmitting ? "Buscando..." : "Pesquisar"}
      </StyledButton>
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 24rem;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  font-size: 0.875rem;
  color: #4b5563; 
`;

const StyledInput = styled.input`
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  border: 1px solid #d1d5db; 
  border-radius: 0.375rem; 
  background-color: white;
  color: #111827; 
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: #6366f1; 
    box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.3);
  }
`;

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #6366f1; 
  color: white;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover:not(:disabled) {
    background-color: #4f46e5; 
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
