import styled from 'styled-components'
import { cores } from '../../styles/variaveis'

export const Container = styled.div`
    padding: 20px;
    font-family: Arial, sans-serif;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    > :hover {
    border: 3px solid #61DBFB;
    }

    @media(max-width: 980px) {
        width: 300px;
        display: grid;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr 1fr;
    }


    @media(max-width: 620px) {
        width: 300px;
        display: grid;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        grid-template-columns: 1fr;
    }
`

export const SectionTitle = styled.h1`
    font-size: 24px;
    color: ${cores.text1};
    margin-bottom: 20px;
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    padding: 24px;
    display: grid;
    align-items: center;
    justify-content: center;
`

export const ProjectCard = styled.div`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    width: 300px;
    height: 440px;
`

export const ProjectName = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin: 0 0 10px;
`

export const ProjectDetail = styled.p`
    font-size: 14px;
    color: #555;
    margin: 8px 0;

    a {
    align-items: center;
    justify-content: center;
    display: flex;
    }

    img {
    width: 250px;
    height: 250px;
    }
`
