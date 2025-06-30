import styled from "styled-components";

export const CoffeeContainer = styled.div`
    width: 16rem;
    background: rgb(255,254,239);
    background: linear-gradient(0deg, rgba(255,254,239,1) 0%, rgba(251,243,255,1) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    img {
        margin-top: -1rem;
    }
    
`

export const Label = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    gap: 0.5rem;

    p {
        border-radius: 1rem;
        background-color: #F1E9C9;
        font-size: 0.7rem;
        padding: 0.3rem;
        color: #C47F17;
    }
`

export const Descricao = styled.div`
    
    display: flex;
    flex-direction: column; /* Mudando para coluna */
    justify-content: center; /* Alinha o conteúdo verticalmente */
    align-items: center; /* Alinha o conteúdo horizontalmente */
    text-align: center; /* Centraliza o texto no eixo horizontal */
    width: 100%; /* Garante que ocupe toda a largura do container */

    p {
        color: #8D8686;
    }


`

export const Separator = styled.div`
    display: flex;
    gap: 1rem;
`

export const Preco = styled.div`
    display: flex;
    gap: 0.2rem;

    p {
        font-size: 2rem;
        font-family: "Baloo 2", serif;
        font-weight: 800;
        color: #574F4D;
    }
`

export const AddRemove = styled.div`
    display: flex;
    align-items: center;
    align-self: center;
    gap: 0.5rem;
    padding: 0.5rem;
    height: 2.5rem;
    border-radius: 0.375rem;

    background-color: #E6E5E5;

    p:nth-child(1){
        color: #8047F8;
        font-size: 1.4rem;
        cursor: pointer;
    }

    
    p:nth-child(3){
        color: #8047F8;
        font-size: 1.4rem;
        cursor: pointer;
    }
`
export const ConfirmAdd = styled.button`
    display: block;
    justify-content: center;  /* Alinha horizontalmente */
    align-items: center;      /* Alinha verticalmente */
    border: none;
    align-self: center;
    padding: 0.5rem;
    height: 2.5rem;
    background-color: #4B2995;
    border-radius: 0.375rem;
`

export const ShoppingCartSimple = styled.img.attrs({
    src: 'src/assets/images/CoffeeInterface/ShoppingCartSimple.svg',
})`
    padding-top: 1rem
`