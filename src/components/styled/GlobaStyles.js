import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: var(--body-light);
        background-image: url("./images/bg-mobile-light.jpg");
        background-size: 100% 20rem;
        background-repeat: no-repeat;
        font-family: var(--font);
        font-weight: 400;
        padding: 5rem 2.4rem 0;
        max-width: 100%;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        body {
            background-image: url("./images/bg-desktop-light.jpg");
            background-size: 100% 30rem;
        }
    }

    ul, 
    li {
        list-style: none;
    }
`