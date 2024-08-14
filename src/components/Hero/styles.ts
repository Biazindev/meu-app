import styled from "styled-components"
import { cores } from "../../styles/variaveis"

export const Container = styled.div`
    background-color: ${cores.backgroundCont};
    margin-bottom: 8px;

    div {
        padding: 32px;
        display: flex;
        justify-content: space-between;
        
        img {
            width: 250px;
            height: 250px;
            object-fit: cover;
            border-radius: 16px;
        }
        p { 
            width: 450px;
            font-size: 16px;
            line-height: 48px;
            font-weight: bold;
            color: ${cores.text1};
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
            transform: translateY(-2px);
        }
    }
`

export const Card = styled.div`
    background-color: ${cores.backgroundCont};

    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.9s ease-out, transform 0.9s ease-out;

    &.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .container {
        background-color: ${cores.backgroundBod};
    }
`
