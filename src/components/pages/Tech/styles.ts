import { styled } from "styled-components"
import { cores } from "../../../styles/variaveis"
import { FaReact } from "react-icons/fa"

export const TextItem = styled.div`
    max-width: 1024px;
    width: 100%;
    padding: 40px;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    display: flex;

    h1{ 
    color: ${cores.text1};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
    }
`

const StyledFaReact = styled(FaReact)`
  margin-right: 8px;
  z-index: 5000;
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 42px;
    cursor: pointer;

    >:hover {
    border: 1px solid #61DBFB;
    }

    @media(max-width: 1042px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0 auto;
    gap: 24px;
    justify-content: center;
    }

    @media(max-width: 726px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    gap: 24px;
    justify-content: center;
    }

    @media(max-width: 476px) {
    gap: 8px;
    }
`

export const Item = styled.div`
    width: 220px;
    height: 60px;
    display: flex;
    border-radius: 8px;
    text-align: center;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);

    @media(max-width: 1042px) {
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    }

    @media(max-width: 476px) {
    width: 80%;
    }

    a {
    display: flex;
    text-decoration: none;
    text-align: center;
    align-items: center;
    justify-content: center;
    }

    p { 
        color: ${cores.text1};
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
        
        &:hover {
            color: #61DBFB;
        }
    }
`