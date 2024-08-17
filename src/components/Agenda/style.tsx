import styled from "styled-components";


export const Container = styled.div`
            max-width: 1024px;
            width: 100%;
            height: 680px;
            margin: 42px auto;
            display: grid;
            align-items: center;
            background-color: #fff;
            overflow-y: hidden;

        @media(max-width: 741px) {
        max-width: 741px;
        margin: 0 auto;        
        width: 80%;
        grid-template-columns: 1fr;
        gap: 16px;
    }
`