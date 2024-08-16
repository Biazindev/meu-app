import { styled } from "styled-components";
import { cores } from "../../styles/variaveis";

export const Container = styled.footer` 
    display: flex;    
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 16px;
    background-color: ${cores.azulEscuro};
    color: #535c68;

    div {
        text-align: start;
        margin-bottom: 16px;
    }

    span {
        font-size: 16px;
        font-weight: bold;
        text-align: start;
    }

    p {
        font-size: 14px;
        line-height: 1.6;
        text-align: start;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-align: left;

        div {
            margin: 0 24px;
            text-align: left;
        }
    }
`

export const Contato = styled.div`
    margin-bottom: 16px;
    display:flex;
    width: 1024px;
    margin: 0 auto;
    justify-content: center;

    p {
        margin-right: 12px;
        text-align: start;
    }

    span {
        font-weight: bold;
        text-align: start;
    }

    @media (min-width: 768px) {
        margin: 0 24px;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    align-items: center;
    text-align: start;

    p {
        margin-bottom: 8px;
        font-weight: bold;
    }

    div {
        display: flex;
        justify-content: center;
    }

    img {
        margin: 0 8px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
            transform: scale(1.1);
        }
    }

    @media (min-width: 768px) {
        margin: 0 24px;

        div {
            justify-content: flex-start;
        }
    }
`

export const LinkRedes = styled.div`
    width: 150px;
`
