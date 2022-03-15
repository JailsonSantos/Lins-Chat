import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background-primary: #F8F8F8;

    --title: #181B23;
    --text: #1F2029;
    --details: #FEFEFE;

    --purple: #835AFD;
    --danger: #E73F5D;
    --pink-dark: #E559F9;
    --pink-light: #D67EE2;

    --text-input: #EEEEF2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // Usado para acessibilidade  
  // Dispositivo Ipod
  @media (max-width: 1080px){
    html{
      font-size: 93.75%; // 15px
    }
  }

  // Dispositivos Mobile
  @media (max-width: 720px){
    html{
      font-size: 87.5%; // 14px 
    }
  }

  body{
    background: var(--purple);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, select, button{
    font: 400 1rem "Roboto", sans-serif;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 700;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  a{
    color: inherit; // assume a cor do elemento pai, ao invés da cor padrão do html
    text-decoration: none;
  }

  .app{
    display: flex;
  }

`;
