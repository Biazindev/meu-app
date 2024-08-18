import styled from "styled-components"
import { breakpoints, cores } from "../../styles/variaveis"
import { ButtonLink } from "../Button/styles"


export const Container = styled.div`
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

    img {
        height: 320px;
        width: 100%;

        @media(max-width: ${breakpoints.mobile}) {
            height: 350px;
        }
    }

    .overlay {
        margin: 0 auto;
        position: absolute;
        top: 116px;
        left: 0;
        width: 100%;
        height: 320px;
        background: rgba(0, 0, 0, 0.4);
        z-index: 1;

        @media(max-width: ${breakpoints.mobile}) {
            height: 351px;
        }
    }

    ${ButtonLink} {
        position: relative;
        top: -120px;
        left: 884px;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        display: flex;
        background-color: #00a8ff;
        border: none;
        height: 48px;
        width: 300px;
    }

    .container .content {
        position: relative;
        z-index: 2;
    }

    > p, span {
        width: 988px;
        position: relative;
        font-size: 32px;
        top: -516px;
        left: 170px;
        color: ${cores.text1};
        font-weight: bold;
        z-index: 1004;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);

        @media(max-width: ${breakpoints.tablet}) {
            width: 320px;
            font-size: 18px;
            line-height: 40px;
            top: -480px;
        }

        @media(max-width: ${breakpoints.mobile}) {
            width: 280px;
            font-size: 18px;
            line-height: 40px;
            top: -390px;
        }
    }

    span {
        top: -280px;
        color: #34ace0;

        @media(max-width: ${breakpoints.mobile}) {
            width: 280px;
            display: block;
            top: -280px;
        }
    }

    div {
        display: flex;
        justify-content: space-around;

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
