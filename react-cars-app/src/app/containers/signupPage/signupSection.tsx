import { gql, useMutation } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks";
import React, {SyntheticEvent, useState } from "react";
import { useHistory, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { Button } from "../../components/button";
import accessToken from "../../../accessToken"
import { setAccessToken } from '../../../accessToken';




const SignupContainer = styled.div`
  font-family:'Lato',sans-serif; 
  ${tw`
  h-full
  w-full
  md:pt-20 
  pb-6 
  px-2 
  md:px-0
  `};
`;

const Header = styled.div`
  ${tw`
  max-w-lg mx-auto
  `};
`;

const Title = styled.div`
  ${tw`
  text-4xl 
  font-bold 
  text-white 
  text-center  
  `};
`;


interface ISingupProps{
  
}

export function SignupSection(props: ISingupProps){
  
  const history = useHistory();
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [country,setCountry] = useState("")
  const [redirect, setRedirect] = useState(false);
   
  
  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    if (typeof password !== "undefined" && typeof confirmPassword !== "undefined") {

      if (password != confirmPassword) {
        alert("Password does not match")
      }
    }
    
    const response = await fetch('http://localhost:9000/auth/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        // credentials: 'include',
      body: JSON.stringify({
            username, 
            email,
            password,
            country
        })
      });
    if(response.status === 201) {
      setRedirect(true);
      
      // console.log(accessToken);
      // get the logined user info and save it to cache 
    } 
    
  }

  if (redirect) {
     
      return <Redirect to="/login"/>;
    }
  return (
      <SignupContainer>
      <div className="container px-8 py-12 h-50 bg-gray-30 m-z">
       <form className="bg-white shadow-m rounded px-10 pt-8 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={submit}>
        <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="username"
            id="username"
            onChange={e => setUsername(e.target.value)}
            value={username}
            placeholder="thunder"
            required
            />
          </div>
            <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            type="email"
            id="username"
            onChange={e => setEmail(e.target.value)}
            value={email}
            placeholder="alex@gmail.com"
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
            placeholder="**********"
            required
          />
          </div>
          <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Confirm_Password
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="password"
            onChange={e => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            type="password"
            placeholder="**********"
            required
          />
          </div>
          <div className="m-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Country
          </label>
          <input
            className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            id="country"
            onChange={e => setCountry(e.target.value)}
            value={country}
            type="country"
            placeholder="PLANT EARTH"
            
          />
          </div>
          
          <button style={{ marginTop: 1, padding: 15}}className="w-100 btn btn-lg btn-primary" type="submit"> SING UP</button>
          <a href="/login" ><p className="text-center text-red-500 text-m" >
            Alread Got The Account,Please Login!
          </p></a>
        </form>
       
        </div>
    </SignupContainer>
   
      
);

}