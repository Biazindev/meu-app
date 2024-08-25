import { styled } from "styled-components";
import { breakpoints, cores } from "../../styles/variaveis";
import { ButtonLink } from "../Button/styles";



export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    position: relative;
    padding: 24px;
    display: flex;
    justify-content: space-around;

    h1 {
    color: #fff;
    margin-left: 48px;
    z-index: 1000;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
    margin: 24px 0 24px 0;

    @media(max-width: ${breakpoints.tablet}) {
    }
    }

    @media(max-width: 780px) {
        position: static;
    }

    @media(max-width: 506px) {
    display: grid;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    }

    p{
    color: #fffa65;
    font-size: 24px;
    font-weight: bold;
    width: 550px;
    margin: 24px 0 24px 0;
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
    
    @media(max-width: 506px) {
    display: grid;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    }
        
    }

    ${ButtonLink} {
    display: flex;
    margin: 0 auto;
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

    img {
    width: 250px;
    height: 150px;
    border-radius: 8px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 2.1);
    }
`