import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
    margin-top: -8rem;

    div {
        background: var(--shape);
        border-radius: 0.25rem;
        padding: 1.5rem 2rem;

        &.green-background {
            background: var(--green);
            color: var(--shape);
        }
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        line-height: 3rem;
        font-size: 2rem;
        font-weight: 500;
        margin-top: 1rem;
        display: block;
    }
`;