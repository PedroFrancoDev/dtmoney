import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
}

:root {
    --background: #f0f5f8;
    --red: #E52E4D;
    --blue: #5429CC;
    --blue-light: #6933FF;
    --text-title: #363F5F;
    --text-body: #969CB3;
    --shape: #fff;
    --green: #33cc95;
}

body {
    background: var(--background);
    -webkit-sont-smoothing: antialiased;
}

html {
    @media(max-width: 1080px) {
        font-size: 93.75%;
    }

    @media(max-width: 720px) {
        font-size: 87.5%;
    }
}

button {
    cursor: pointer;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    background: var(--background);
    border-radius: 0.25rem;
    padding: 3rem;
    width: 100%;
    position: relative;
    max-width: 576px;
}

.react-modal-close {
    background: none;
    border: none;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    transition: filter(0.2s);

    &:hover {
        filter: brightness(0.8);
    }
}
`;