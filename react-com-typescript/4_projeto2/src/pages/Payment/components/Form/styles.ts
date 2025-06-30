// src/pages/FormAddress/styles.ts
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 4rem;
`;

export const FormContainer = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #4b2995;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input {
    padding: 1rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  button {
    padding: 1rem;
    font-size: 1rem;
    background-color: #4b2995;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #7e3d9b;
  }

  span {
    color: red;
    font-size: 0.875rem;
  }
`;

export const CartContainer = styled.div`
  flex: 1;
  max-width: 35rem;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: #4b2995;
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  p {
    font-size: 1rem;
    font-weight: bold;
  }

  span {
    font-size: 0.875rem;
    color: #777;
  }
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

export const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: #4b2995;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 1rem;

  &.add {
    padding: 0.5rem;
    width: 6rem;
    background-color: #4CAF50;  
    color: white;

    &:hover {
      background-color: #45a049; 
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.6);
    }
  }

  &.remove {
    padding: 0.5rem;
    width: 6rem;
    background-color: #f44336;  
    color: white;

    &:hover {
      background-color: #e53935;  
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px rgba(244, 67, 54, 0.6);
    }
  }
`;

export const Separator = styled.div`
  display: flex;
  gap: 1rem;
`;