import gql from "graphql-tag";

export const SIGN_UP = gql`
  mutation AddUser($SignupData:NewUserInput!){
    addNewUser(newUserData:SignupData){
      username
      email
      password
      country
    }
  }
`;