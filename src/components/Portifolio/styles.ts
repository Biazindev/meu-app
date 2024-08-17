import { styled } from "styled-components";
import { breakpoints, cores } from "../../styles/variaveis";

export const Conteudo = styled.div`
            max-width: 1024px;
            width: 100%;
            margin: 0 auto;
            display: grid;
            align-items: center;

            a {
                display: flex;
                margin: 0  0 32px 0;
                justify-content: center;
                align-items: center;
                text-decoration: none;
            }
`

export const Container = styled.div`
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;

    @media(max-width: 990px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }

    @media(max-width: 686px) {
            display: grid;
            grid-template-columns: 1fr;
            gap: 16px;
        }
}
`



export const ButtonCv = styled.a`
    
    button {
        margin-top: 32px;
        font-size: 16px;
        font-weight: bold;
        color: ${cores.text1};
        width: 200px;
        height: 32px;
        background-color: transparent;
        border: 1px solid black;
        border-radius: 8px;
        cursor: pointer;

        &:hover {
            background-color: #00a8ff;
            border: none;
            height: 48px;
            width: 300px;
        }
    }
    
`

export const Card = styled.div`

    width: 330px;
    height: 473px;
    background-color: ${cores.backgroundBod};
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1.0);
    &:hover {
            background-color: #3c40c6;
            border: none;
        }

    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
        button {
            width: 100%;
        }
            p {
                color: ${cores.text1};
                font-size: 12px;
                font-weight: bold;
                text-align: center;
                line-height: 20px;
            }

        button {
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        color: ${cores.text1};
        height: 32px;
        background-color: transparent;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 1.0);

        &:hover {
            background-color: #00a8ff;
            border: none;
            height: 34px;
        }
        }
`