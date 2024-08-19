import { styled } from "styled-components";
import { breakpoints, cores } from "../../styles/variaveis";
import { ButtonLink } from "../Button/styles";



export const Container = styled.div`
    max-width: 1024px;
    height: 600px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    top: -75px;
    position: relative;

    h1 {
    color: #fff;
    position: relative;
    top: 160px;
    margin-left: 48px;
    z-index: 1000;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);

    @media(max-width: ${breakpoints.tablet}) {
        font-size: 18px;
        margin-left: 24px;
    }
    }

    p{
    color: #fffa65;
    font-size: 24px;
    position: relative;
    font-weight: bold;
    top: 180px;
    width: 550px;
    margin-left: 48px;
    text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 2.1);
    z-index: 1000;

    @media(max-width: ${breakpoints.tablet}) {
        width: 280px;
        font-size: 16px;
        margin-left: 24px;
    }
    }

    img {
        width: 100%;
        height: 500px;
    }

    ${ButtonLink} {
    display: flex;
    margin: 0 auto;
    position: relative;
    top: -75px;
    text-decoration: none;
    background-color: #00a8ff;
    border: none;
    height: 48px;
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width: ${breakpoints.tablet}) {
        display: none;
    }
    }
`