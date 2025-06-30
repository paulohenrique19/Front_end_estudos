import styled from "styled-components";

export const CoffeeListContainer = styled.div`
    margin: auto;
    width: auto;

    display: flex;
    flex-direction: column;

    gap: 3rem;
    
    max-width: 80rem;

    padding: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: 1rem;  // Adiciona espaçamento entre o campo de busca e os botões

  button {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border-radius: 0.375rem;
    border: 1px solid #ddd;
    background-color: #f1f1f1;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #ddd;
    }

    &:focus {
      outline: none;
      border-color: #4b2995;
    }
  }
`;

export const SearchContainer = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  display: flex;
  align-items: center;  // Alinha o conteúdo verticalmente
  justify-content: center;  // Alinha os itens horizontalmente no centro
  gap: 1rem;  // Adiciona espaço entre o input e os botões

  input {
    padding: 0.8rem 1rem;
    font-size: 1rem;
    border-radius: 0.375rem;
    border: 1px solid #ddd;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;

    &:focus {
      outline: none;
      border-color: #4b2995;
    }
  }
`;

export const Title = styled.div`
    font-size: 2rem;
    font-family: "Baloo 2", serif;
    font-weight: 800;
    color: #403937;
`;

export const Coffees = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
`;
