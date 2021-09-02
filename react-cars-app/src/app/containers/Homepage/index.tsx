import React from "react";
import styled from "styled-components";
import tw from "twin.macro"

const PageContainer = styled.div`
   ${tw`
      flex
      flex-col
      w-full
      h-full
      items-center
      overflow-x-hidden
   `};

`;


export function Homepage() {
  return <PageContainer>
    <div>This is Homepage from Container!</div>
    <div>Hello from tailwindcss!</div>
  </PageContainer>
}

