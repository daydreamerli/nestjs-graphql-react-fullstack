import { gql, useMutation ,useQuery } from "@apollo/client";
import React, {SyntheticEvent, useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/button";
import { apolloClient } from "../../graphql";
import userService from "../../services/userService";
import { USER_LOGIN } from "../../services/userService/userLogin";
import { LoginUser } from '../../services/userService/__generated__/LoginUser';
import jwt_decode from "jwt-decode";
import { response } from "express";
 
// export const LOGIN = gql`
//   mutation LoginUser($email: String!, $password:String!) {
//     login(email:$email, password:$password){
//       access_token
//     }
//   }
// `;

// export const ME = gql`
//   query USER_NOW{
//     CurrentUser{
//       id
//       username
//       email
//     }
//   }
// `;

interface ILogin2Props {
  // set the props as username and email 
}

export function LoginSection2(props: ILogin2Props){
  
 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [redirect, setRedirect] = useState(false);
   
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    const variables = {email,password}
    
    const response = await userService.login(variables)
    
    if (response === "") {
      alert("Invalid Input, Please Check your input!")
    } else {
      setRedirect(true)
      // const userId = await jwt_decode(response).payload.id
      console.log(response)
    }  
  }
  
  if (redirect) {
    return <Redirect to="/"/>;
  }
 
  return (
   
      <div className="container px-8 py-12 h-50 bg-gray-30 m-z">
       <form className="bg-white shadow-m rounded px-10 pt-8 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={submit}>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username/email
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="email"
            id="username"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="alex@example.com"
            required
          />
        </div>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="password"
            onChange={e => setPassword(e.target.value)}
            value={password}
            type="password"
            required
          />
          </div>
          <button style={{ marginTop: 1, padding: 15}}className="w-100 btn btn-lg btn-primary" type="submit"> Sign in</button>
 
        </form>
        <a href="/" ><p className="text-center text-red-500 text-m" >
            No Account Yet,Register and Join Us Now.
          </p></a>
        </div>
    
   
      
      );

}


