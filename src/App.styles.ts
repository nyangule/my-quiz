import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/girlCode.jpg' ;


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;

  > p {
    color: black;
  }

  .score {
    color: black;
    font-size: 2rem;
    font-style: italic;
    margin: 0;
  }

  
  }

  .start,.next {
    cursor: pointer;
    background: green;
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 50px;
    margin: 30px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 300px;
  }
`;
