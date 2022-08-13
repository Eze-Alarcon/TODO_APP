import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* Box sizing rules */

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }


    html {
        font-size: 62.5%;
    }

    /* Remove default margin */

    body,
    main,
    header,
    div,
    section,
    article,
    footer,
    ul,
    h1,
    h2,
    h3,
    h4,
    p,
    figure {
        margin: 0;
        padding: 0;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */

    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */

    html:focus-within {
        scroll-behavior: smooth;
    }

    /* Set core body defaults */

    body {
        width: 100vw;
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }

    /* A elements that don't have a class get default styles */

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */

    img,
    picture {
        max-width: 100%;
        display: block;
        margin: 0;
    }

    /* Inherit fonts for inputs and buttons */

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
        
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }


    /* My settings */

    body {
        background-color: ${({theme}) => theme.body};
        background-image: url("./images/bg-mobile-light.jpg");
        background-size: 100% 20rem;
        background-repeat: no-repeat;
        font-family: ${({theme}) => theme.font};
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