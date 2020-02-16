import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Header = styled.header`
  text-align: center;
`;

const Main = styled.main``;

function App() {
  return (
    <Container>
      <Header>Hello world</Header>
      <Main></Main>
    </Container>
  );
}

export default App;
