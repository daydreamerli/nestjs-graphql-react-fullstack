import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { Marginer } from "../../components/marginer";
import { Navbar } from "../../components/navbar";
import { LoginSection } from "./loginSection";
import { LoginSection2 } from "./loginSection2";
import { TopSection } from "./topSection";

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

export function LoginPage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <LoginSection />
      <Footer />
    </PageContainer>
  );
}
