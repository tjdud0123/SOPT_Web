import React from 'react';
import './App.css';
import styled, { css } from 'styled-components';

const Button: any = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${(props: any) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;
const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
  );
}

export default App;
