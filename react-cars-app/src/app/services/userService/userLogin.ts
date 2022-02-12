import gql from "graphql-tag";

export const USER_LOGIN = gql`
  mutation LoginUser($email: String!, $password:String!) {
    login(email:$email, password:$password){
      access_token
    }
  }
`;

