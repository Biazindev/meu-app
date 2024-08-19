import styled from "styled-components"
import { breakpoints, cores } from "../../styles/variaveis"
import { ButtonLink } from "../Button/styles"

export const Container = styled.div`
    position: relative;
    background-color: ${cores.backgroundCont};
    height: 320px;

    .slick-prev,
    .slick-next {
        z-index: 1003;
        top: 50%;
        transform: translateY(-50%);
    }

    img {
        width: 100%;
        height: auto;
        display: block;
    }

    @media(max-width: ${breakpoints.mobile}) {
        height: 360px;
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }

    ${ButtonLink} {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        text-decoration: none;
        background-color: #00a8ff;
        border: none;
        height: 48px;
        width: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
