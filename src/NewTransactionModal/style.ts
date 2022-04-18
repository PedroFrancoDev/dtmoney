import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    h1 {
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        height: 4rem;
        padding: 0 1.5rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
           color: var(--text-body);
        }

        & + input {
            margin-top: 2rem;
        }
    }

    button[type = 'submit'] {
        background: var(--green);
        border: 0;
        padding: 0 1.5rem;
        height: 4rem;
        width: 100%;
        border-radius: 0.25rem;
        color: #fff;
        font-size: 1rem;
        margin-top: 1.5rem;
        transition: 0.2s;
        font-weight: 600;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;

export const TransactionTypeModal = styled.div`
    margin: 1rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface ActiveProps {
    isActive: boolean,
    activeColor: 'green' | 'red'
}

const colors = {
    green: '#33cc95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<ActiveProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    border: 01px solid #d7d7d7;
    border-radius: 0.25rem;
    height: 4rem;
    transition: 0.2s;

    background: ${({isActive, activeColor}) => isActive ? transparentize(0.9, colors[activeColor]) : 'none'};

    &:hover {
       border-color: ${darken(0.1, '#d7d7d7')};
    }
        
    img {
       height: 20px;
       width: 20px;
    }

    span {
        margin-left: 0.5rem;
        font-size: 1rem;
        color: var(--text-title); 
    }
`