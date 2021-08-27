import React from 'react';
import './App.css';
import styled from "styled-components";
import tw from "twin.macro"
import { Homepage } from './containers/Homepage';

const AppContainer = styled.div`
${tw`
flex
flex-col
w-full
h-full
`};
`

function App() {
  return (
    <AppContainer>
     <Homepage />
    </AppContainer>
  );
}

export default App;
