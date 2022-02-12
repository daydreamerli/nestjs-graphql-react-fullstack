import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";
import { SignupSection } from "./signupSection";

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

export function SignupPage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
     < SignupSection  />
      <Footer />
    </PageContainer>
  );
}
