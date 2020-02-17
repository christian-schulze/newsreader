import React from "react";
import styled from "styled-components";

import { ArticlesContainer } from "../Articles/ArticlesContainer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  text-align: center;
  font-weight: bolder;
  padding-top: 16px;
`;

const Main = styled.main``;

function App() {
  return (
    <Container>
      <Header>News Reader</Header>
      <Main>
        <ArticlesContainer />
      </Main>
    </Container>
  );
}

export default App;
