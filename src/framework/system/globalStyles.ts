import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
  
        font-family: 'Barlow', 'Courier New', Courier, monospace;
        font-size: 14px;
  
        &::before,
        &::after {
            box-sizing: inherit;
        }
    }
  
    html,body {
        height: 100%;
        width: 100%;
        
    }
  
    footer {
      width: 100%;
      position: absolute;
      bottom: 0;
      padding-bottom: 2.5rem;
      background-color: #fff;
    }

    #root{
        height: 100%;
    }

`;

export default GlobalStyles;
