import { styled } from "styled-components"
import { Link } from "react-router-dom"
import { cores } from "../../styles/variaveis"


export const ContainerHeader = styled.div`
    width: 100%;
    height: 360px;
    margin-bottom: 48px;

    img {
    width: 100%;
    height: 360px;
    display: flex;
    }
`

export const Display = styled.div`
            max-width: 1024px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            top: -205px;


            p{
                font-size: 32px;
                font-weight: bold;
                color: ${cores.text1};
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), 4px 4px 8px rgba(0, 0, 0, 0.9);
                transform: translateY(-2px);
            }

            ul {
            display: flex;
            li{
            margin-left: 24px;
            }
`

export const LinkHeader = styled(Link)`
    font-size: 16px;
`