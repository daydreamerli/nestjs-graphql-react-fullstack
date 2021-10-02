import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import "./App.css";
import { HomePage } from "./app/containers/HomePage";
import { Route, BrowserRouter as Router, } from "react-router-dom";
import { CarPage } from "./app/containers/CarPage";
import { LoginPage } from "./app/containers/UserLogin";
import { SignupPage } from "./app/containers/signupPage";
import { OrderPage } from "./app/containers/orderPage";


const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `};
`;


function App() {

  return (
    <AppContainer>
      <Router>
        <switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/cars" exact component={() => <CarPage />} />
          <Route path="/order" exact component={() => <OrderPage />} />
          <Route path="/login" exact component={() => <LoginPage />} />
          <Route path="/signup" exact component={() => <SignupPage />} />
        </switch>
      </Router>
    </AppContainer>
  );
}

export default App;


