import styled, { keyframes } from 'styled-components'

/* 
    ==================

    ----- Header -----

    ==================
*/


export const HeaderStyled = styled.header`
    max-width: 54rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    & .title {
        color: ${({theme}) => theme.title};
        text-align: center;
        font-family: ${({theme}) => theme.font};
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 2.5rem;
        letter-spacing: 8px;
        margin-bottom: 3rem;
    }

    & .loading {
        opacity: .25;
    }

    @media (min-width: 768px) {
        & .title {
            font-size: 3rem;
            line-height: 3rem;
            letter-spacing: 1.125px;
            margin-bottom: 4.8rem;
        }
    }
    
`

export const HeaderIcon = styled.i`
    background-size: 100%;
    height: 25px;
    width: 25px;
    cursor: pointer;

    &.light {
        background-image: url('./images/icon-moon.svg');
    }

    &.dark {
        background-image: url('./images/icon-sun.svg');
    }
`





/* 
    =================================

    ----- interaction Container -----

    =================================
*/


export const SectionStyled =styled.section`
    min-height: 48rem;
    max-width: 54rem;
    display: flex;
    gap: 1.6rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
`


/* 
    ======================

    ----- TodoSearch -----

    ======================
*/

export const InputContainerStyled =styled.article`
    background-color: ${({theme}) => theme.input};
    width: 100%;
    min-height: 4.8rem;
    border-radius: 5px;
    border: none;
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0 2rem;

    @media (min-width: 768px) {
        height: 6.8rem;
    }
`

export const InputStyled = styled.input`
    border: none;
    outline: none;
    width: 90%;
    height: 4.8rem;
    margin: 0;
    padding: 0;
    font-family: ${({theme}) => theme.font};
    color: ${({theme}) => theme.inputText};
    background-color: ${({theme}) => theme.input};
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 1.5rem;
    letter-spacing: 0.17px;

    &:focus {
        color: ${({theme}) => theme.inputTextActive};
    }

    &:disabled {
        opacity: .25;
    }

    @media (min-width: 768px) {
        font-size: 1.8rem;
        line-height: 1.8rem;
        letter-spacing: 0.25px;
    }
`


/* 
    ============================

    ----- CreateTodobutton -----

    ============================
*/



export const TodoButtonStyled = styled.button`
    background-color: inherit;
    border: none;
    outline: none;
    display: grid;
    place-items: center;
    width: 10%;
    height: 48px;

    & svg {
        cursor: pointer;
        transform: rotate(45deg) scale(.8);
    }

    &:hover svg path {
        fill: #008000;
    }

`

/* 
    ====================

    ----- TodoList -----

    ====================
*/


export const TodoListContainer = styled.article`
    background-color: ${({theme}) => theme.container};
    min-height: calc(4.8rem * 9);
    width: 100%;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 ${({theme}) => theme.boxShadow};
`

export const TodoListStyled = styled.ul`
    height: calc(4.8rem * 8);
    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    &::-webkit-scrollbar {
        display: none;
    }

    &:last-child {
        border-bottom: none;
    }
`

export const TodoListFooter = styled.div`
    height: 4.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem 0 2rem;
    border-top: 1px solid ${({theme}) => theme.circleBorder};

    & p {
        color: ${({theme}) => theme.footer};
    }

    & p:nth-child(2) {
        cursor: pointer;
    }
`

export const TodoItemStyled = styled.li`
    min-height: 4.8rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
    padding: 0 2rem 0 2rem;
    border-bottom: .5px solid ${({theme}) => theme.circleBorder};
    cursor: pointer;


    & .icon-check {
        width: 20px;
        height: 20px;
        border: 1px solid ${({theme}) => theme.circleBorder};
        border-radius: 50%;
        margin: 0 1.2rem 0 0;
        padding: 0;
        display: grid;
        place-items: center;
    }


    &.completed .icon-check {
        background-color: ${({theme}) => theme.gradient.color1};
        background-image: linear-gradient(135deg, 
            ${({theme}) => theme.gradient.color1} 0%, 
            ${({theme}) => theme.gradient.color2} 100%);
    }

    &.completed .text {
        text-decoration: line-through;
        color: ${({theme}) => theme.todoComplete};
    }


    & .text {
        width: 80%;
        height: 4.8rem;
        display: grid;
        align-items: center;
        font-size: 1.3rem;
        line-height: 1.5rem;
        letter-spacing: 0.17px;
        color: ${({theme}) => theme.todo};
    }

    & .icon-delete {
        width: 10%;
        height: 4.8rem;
        transform: scale(.8);
        display: grid;
        place-items: center;
    }

    & .icon-delete:hover svg path {
        fill: ${({theme}) => theme.svgDelete};
    }



    @media (min-width: 768px) {
        min-height: 6.4rem;
        
        & .text {
            font-size: 1.8rem;
            line-height: 1.8rem;
        }

        & .icon-check {
            width: 24px;
            height: 24px;
        }
    }
`


/* 
    =======================

    ----- Todo Filter -----

    =======================
*/


export const TodoFilterStyled = styled.article`
    height: 4.8rem;
    width: 100%;
    border-radius: 5px;
    background-color: ${({theme}) => theme.container};
    box-shadow: 0 9px 20px 0 ${({theme}) => theme.boxShadow};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly; 
`

export const FilterItem = styled.p`
    color: ${({theme}) => theme.footer};
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.4rem;
    cursor: pointer;

    &.active {
        color: ${({theme}) => theme.footerActive};
    }
`


/* 
    =================

    ----- Modal -----

    =================
*/


export const FormContainerStyle = styled.div`
    background: rgba( 32, 35, 41, .8);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
`

export const FormStyle = styled.form`
    width: 90%;
    max-width: 300px;
    background-color: ${({theme}) => theme.input};
    padding: 33px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & label {
        text-align: center;
        font-weight: bold;
        font-size: 20px;
        color: #1E1E1F;
        margin-bottom: 26px;
    }

    & textarea {
        background-color: #F9FBFC;
        border: 2px solid #202329;
        border-radius: 2px;
        box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);
        color: #1E1E1F;
        font-size: 20px;
        text-align: center;
        padding: 12px;
        height: 96px;
        width: calc(100% - 25px);
    }

    & textarea::placeholder {
        color: #A5A5A5;
        font-weight: 400;
    }

    & textarea:focus {
        outline-color: #61DAFA;
    }
`

export const ButtonsContainer = styled.div`
    margin-top: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const FormButton = styled.button`
    cursor: pointer;
    display: inline-block;
    font-size: 20px;
    color: #202329;
    font-weight: 400;
    width: 120px;
    height: 48px;
    border-radius: 2px;
    border: none;

    &.add {
        background: #61DAFA;
        box-shadow: 0px 5px 25px rgba(97, 218, 250, 0.5);
    }

    &.cancel {
        background: transparent;
    }
`


/* 
    =======================

    ----- ChangeAlert -----

    =======================
*/


export const AlertStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #1e1e1f50;
    z-index: 2;
`


export const AlertContainerStyle = styled.div`
    position: fixed;
    bottom: -10px;
    left: -10px;
    right: -10px;
    padding: 34px;
    background-color: #1e1e1f;
    color: #f2f4f5;
    z-index: 2;
    text-align: center;
    font-size: 20px;

    & button {
        margin-top: 16px;
        margin-bottom: 16px;
    }
`


/* 
    ===================

    ----- Actions -----

    ===================
*/



/* 
    ========================

    ----- TodosLoading -----

    ========================
*/

export const LoadingStyle = styled.li`
    width: 100%;
    height: 4.8rem;
    border-bottom: .5px solid ${({theme}) => theme.circleBorder};
    display: flex;
    align-items: center;
    justify-content: center;
`

const loadingAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`


export const LoadingCircle = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0 1.2rem 0 0;

    &.loadingEfect {
        background: linear-gradient(
            90deg, 
            ${({theme}) => theme.loading.color1}, 
            ${({theme}) => theme.loading.color2});
        background-size: 400% 400%;
        animation: ${loadingAnimation} 3s ease-in-out infinite;
    }
`

export const LoadingText = styled.p`
    height: 50%;
    width: 80%;
    border-radius: 10px;

    &.loadingEfect {
        background: linear-gradient(
            90deg, 
            ${({theme}) => theme.loading.color1}, 
            ${({theme}) => theme.loading.color2});
        background-size: 400% 400%;
        animation: ${loadingAnimation} 3s ease-in-out infinite;
    }
`

/* 
    ========================

    ----- EmptyLoading -----

    ========================
*/

export const FirstTodoStyle = styled.li`
    min-height: 4.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0 2rem 0 2rem;
    border: none;
    border-bottom: .5px solid ${({theme}) => theme.circleBorder};

    & .text {
        width: 80%;
        height: 4.8rem;
        display: grid;
        align-items: center;
        font-size: 1.3rem;
        line-height: 1.5rem;
        letter-spacing: 0.17px;
        color: ${({theme}) => theme.normal};
    }

    @media (min-width: 768px) {
        & .text {
            font-size: 1.8rem;
            line-height: 1.8rem;
        }
    }
`

/* 
    ========================

    ----- TodosError -----

    ========================
*/


export const ErrorTodoStyle = styled.li`
    height: 100%;
    display: grid;
    place-items: center;

    .text {
        text-align: center;
    }
`


