import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    font-size: 62.5%;
  }

  html, 
  body,
  #root {
    min-height: 100%;
  }

  .App {
    height: 100vh;
  }
  
  html {
    color-scheme: dark light;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
    padding: 0;
    font: inherit;
  }
  
  body {
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
  }

  li {
    list-style: none;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  img,
  picture,
  svg,
  video {
    display: block;
    width: 100%;
    object-fit: center;
  }

  .error {
    background: lightcoral;
    color: red;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .success {
    background: lightgreen;
    color: green;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

export default GlobalStyle;