import styled from "styled-components";

export const HeaderContainer = styled.header`
  margin: auto;
  width: auto;
  max-width: 80rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0; 
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: white;
`;

export const Logo = styled.img.attrs({
  src: 'src/assets/images/Home/logos.svg', 
})``;

export const Separator = styled.div`
  display: flex;
  gap: 0.75rem;
`;

export const Local = styled.div`
  display: flex;
  width: 8.9rem;
  height: 2.375rem;
  background-color: #EBE5F9;
  border-radius: 0.375rem;
  padding: 0.5rem;

  img {
    margin-right: 0.5rem; 
  }
    
  p {
    color: #4B2995;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.7;
  }
`;

export const CartIcon = styled.button`
  border: none;
  height: 2.375rem;
  width: 2.375rem;
  background-color: #F1E9C9;
  border-radius: 0.375rem;
  padding: 0.5rem;
  position: relative;  
`;

export const CartImage = styled.img.attrs({
  src: 'src/assets/images/Home/Icon.svg', 
})``;


export const CartItemCount = styled.span`
  position: absolute;
  top: -5px;   
  right: -5px; 
  background-color: #ff4c4c; 
  color: white;
  font-size: 12px;  
  width: 18px;  
  height: 18px; 
  border-radius: 50%;  
  display: flex;
  align-items: center;
  justify-content: center;  
  font-weight: bold;
`;
