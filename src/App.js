import React from "react";
import GlobalStyle from "./globalStyles.js";
import Line from "./components/Line";
import styled from "styled-components";

let Background =
  "https://images.unsplash.com/photo-1593964269618-29948d5e2a29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

// **** START - Styled components ****

const Title = styled.h1`
  text-align: center;
  color: white;
  font-size: 4rem;
  padding: 35px 20px 0 20px;
  margin: -5px;
`;

const BackgImg = styled.div`
  background-image: url(${Background});
  height: 750px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: 320px) {
    height: 950px;
  }

  @media (min-width: 768px) and (max-width: 820px) {
    height: 1050px;
  }

  @media (min-width: 1024px) and (max-width: 1030px) {
    height: 1400px;
  }
`;

// **** END - Styled components ****

function App() {
  return (
    <BackgImg>
      <GlobalStyle />
      <div>
        <Title>ROMEO &amp; JULIET</Title>
      </div>
      <div>
        <Line />
      </div>
    </BackgImg>
  );
}

export default App;
