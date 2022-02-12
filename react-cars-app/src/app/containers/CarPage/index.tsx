import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { TopSUV } from "./topSUV";
import { TopSection } from "./topSection";
import { TopHatchBack } from "./topHatchBack";
import {TopHybird} from "./topHybird";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
  `}
`;

export function CarPage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <TopSUV />
      <TopHatchBack />
      <TopHybird />
      <Marginer direction="vertical" margin="2em" />
      <Footer />
    </PageContainer>
  );
}
