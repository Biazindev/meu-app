import styled from "styled-components";
import { Link } from "react-router-dom";
import { breakpoints, cores } from "../../styles/variaveis";

export const ContainerHeader = styled.div`
    width: 100%;
    height: 116px;
    position: relative;

    img {
        width: 100%;
        height: 116px;
        display: block;
    }

    @media(max-width: ${breakpoints.mobile}) {
        background-size: cover;
        width: 100%;
    }
`

export const Display = styled.div<{ $isOpen: boolean }>`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1000;

    nav {
        display: flex;
        flex-grow: 2;
        position: relative;
        top: -40px;

        @media (max-width: ${breakpoints.tablet}) {
            flex-direction: column;
            margin-top: 90px;
            top: -175px;
            left: 0;
            padding: 16px;
            display: ${(props) => (props.$isOpen ? "flex" : "none")};
            z-index: 5000;
     }
    }
`

export const LinkHeader = styled(Link)`
    font-size: 32px;
    font-weight: bold;
    color: ${cores.text1};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
    text-decoration: none;
    z-index: 1000;

    @media(max-width: ${breakpoints.tablet}) {
        font-size: 24px;
    }
`;

export const Hamburguer = styled.div`
    width: 32px;
    cursor: pointer;
    z-index: 2000;
    position: relative;
    top: -70px;
    display: block;
    margin: 0 16px;

    span {
        height: 2px;
        display: block;
        width: 100%;
        margin-bottom: 4px;
        background: ${cores.text1};
    }

    @media (min-width: ${breakpoints.tablet}) {
        display: none;
        z-index: 1001;
    }
`

export const NavMobile = styled.nav`
    display: flex;

    &.is-open {
        display: block;
    }

    @media(min-width: ${breakpoints.tablet}) {
        display: none;
    }
`

export const DisplayHeader = styled.div`
    width: 100%;
    align-items: center;
    position: absolute;
    justify-content: center;
    z-index: 1003;
    top: 35px;
    display: none;
    margin: 0 auto;
    align-items: center;

    @media(min-width: 770px) {
        display: flex;
    }
    
    
    nav {

        display: flex;
        justify-content: space-around;
            
        ul{
            display: flex;
            position: relative;

            li {
                margin-left: 24px;
            }
        }
    }
`
