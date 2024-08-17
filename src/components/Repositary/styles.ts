import styled from 'styled-components'
import { cores } from '../../styles/variaveis'
import { ButtonLink } from '../Button/styles'

export const Container = styled.div`
    padding-top: 20px;
    max-width: 1024px;
    margin: 0 auto;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        > img {
            width: 50px;
            height: 50px;
        }
    }
`

export const Heading = styled.h1`
    text-align: center;
    font-size: 2em;
    color: ${cores.text1};
`

export const RepoList = styled.ul`
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;

    @media(max-width: 741px) {
        max-width: 741px;
        margin: 0 auto;        
        width: 80%;
        grid-template-columns: 1fr;
        gap: 16px;
    }
`

export const RepoItem = styled.li`
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 15px;
    background-color: #f9f9f9;
    height: 268px;
    width: 100%;

    ${ButtonLink} {
        display: flex;
        width: 100%;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        margin: 16px 0;
    }
`

export const RepoTitle = styled.h2`
    font-size: 1.5em;
    margin: 0;
    color: #007bff;
`

export const RepoDescription = styled.p`
    font-size: 1em;
    color: #666;
`

export const RepoLink = styled.a`
    display: inline-block;
    margin-top: 10px;
    font-size: 1em;
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`
