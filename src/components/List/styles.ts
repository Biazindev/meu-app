import { styled } from "styled-components"
import { breakpoints, cores } from "../../styles/variaveis"

export const Container = styled.div`
    background-color: ${cores.backgroundBod};
    margin-bottom: 8px;

    div {
        padding: 32px;
        display: flex;
        justify-content: space-around;

        img {
            width: 250px;
            height: 250px;
            object-fit: cover;
            border-radius: 16px;
        }

        p { 
            width: 450px;
            font-size: 16px;
            line-height: 32px;
            font-weight: bold;
            color: ${cores.text1};
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
            transform: translateY(-2px);
        }
    }

    @media(max-width: ${breakpoints.tablet}) {
        div {
            display: block;
            padding: 16px;

            img {
                width: 100%;
                height: 250px;
                margin-bottom: 16px;
                border-radius: 0;
                object-fit: cover;
            }

            p {
                width: 100%;
                font-size: 24px;
            }

            .adjuste {
                padding: 0;
                margin: 0;
            }
        }
    }

    @media(max-width: ${breakpoints.mobile}) {
        div {
            display: block;
            padding: 8px;

            img {
                width: 100%;
                height: 120px;
                object-fit: cover;
            }

            p {
                width: 100%;
                font-size: 16px;
                font-weight: 400;
                line-height: 28px;
                text-align: start;
            }
                h2{
                    text-align: center;
                }
        }
    }

    @media(max-width: ${breakpoints.smallMobile}) {
        div {

            p {
                
                line-height: 24px;
            }
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
        height: 314px;
    }

    @media(max-width: ${breakpoints.tablet}) {
        .container {
            width: 100%;
            height: 100%;
            padding: 0;
        }
    }

    @media(max-width: ${breakpoints.mobile}) {
        .container {
            width: 90%;
            height: 400px;
            padding: 0;
        }
    }
`

export const CardItem = styled.div`
    display: block;

    div {
        display: block;

        h2 {
            margin-bottom: 16px;
            color: #34ace0;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
        }
    }

    a {
        width: 150px;
        height: 32px;
        display: flex;
        text-decoration: none;
        align-items: center;
        background-color: #34ace0;
        justify-content: center;
        text-align: center;
        border: none;
    }

    @media(max-width: ${breakpoints.tablet}) {
        a {
            width: 100%;
            margin-top: 24px;
        }

        @media(max-width: ${breakpoints.mobile}) {
        a {
            width: 100%;
            margin-top: 16px;
        }
    }
`
