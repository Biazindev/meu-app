import styled, { createGlobalStyle } from 'styled-components'
import { cores } from './variaveis'


export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
        list-style: none;
     }
        body {
        background-color: ${cores.backgroundCont};
        }
        .container {
            background-color: ${cores.backgroundBod};
            box-shadow: 0 4px 8px rgba(0, 0, 0, 1.0);
            max-width: 1024px;
            width: 100%;
            margin: 0 auto;
            display: grid;
            align-items: center;
        }
    }`

export default GlobalCss
