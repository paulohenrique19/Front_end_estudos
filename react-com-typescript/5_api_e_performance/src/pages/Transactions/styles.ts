import styled from "styled-components";

export const TransactionsContainer = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const TransactionsTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    td {
        padding: 1.25rem 2rem;
        background: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:last-child {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`;

interface PriceHighLightProps {
    variant: 'income' | 'outcome';
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
    color: ${props => props.variant === 'income' ? props.theme["green-300"] : props.theme["red-300"]};
`;

export const Button = styled.button<{ color?: string }>`
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background: ${props => props.theme["red-300"]};
    color: ${props => props.theme["red-400"]};
    transition: background-color 0.3s;

    &:hover {
        background: ${props => props.theme["red-500"]};
    }

    &:disabled {
        background: ${props => props.theme["red-400"]};
        cursor: not-allowed;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Modal = styled.div`
    background: ${props => props.theme["gray-700"]};
    padding: 2rem;
    border-radius: 8px;
    width: 400px;
    text-align: center;

    h3 {
        margin-bottom: 1.5rem;
        font-size: 1.25rem;
        color: ${props => props.theme["gray-100"]};
    }

    div {
        display: flex;
        justify-content: space-around;
    }
`;
