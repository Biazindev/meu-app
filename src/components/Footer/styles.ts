import { styled } from "styled-components"
import { cores } from "../../styles/variaveis"

export const Container = styled.div`
    display: flex;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: space-around;
    height: 180px;
    padding: 32px;

    span {
        font-size: 12px;
        color: ${cores.text1};
        font-weight: bold;
    }

    p {
    justify-content: center;
    width: 380px;
    font-size: 12px;
    color: ${cores.text1};
    text-align: center;
    }

    div {
    aling-items: center;
    display: block;
    text-align: center;
    }
`

export const Contato = styled.div`
    display: grid;
    gap: 8px;
`