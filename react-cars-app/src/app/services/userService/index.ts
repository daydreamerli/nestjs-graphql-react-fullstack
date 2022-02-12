import { apolloClient } from "../../graphql";
import { LoginUserVariables } from './__generated__/LoginUser';
import {USER_LOGIN} from './userLogin'
import { AddUserVariables, AddUser_addNewUser } from "./__generated__/AddUser";
import { SIGN_UP } from "./SignUp";

class UserService{

  public async login(variables:LoginUserVariables): Promise<string>{
    const response = await apolloClient
      .mutate({ mutation: USER_LOGIN,variables})
      .catch((err) => {
        throw err;
      });

    if (response && response.data)
      return response.data;

    return "";
  };

  public async signup(variables:AddUserVariables): Promise<AddUser_addNewUser>{
    const response = await apolloClient
      .mutate({ mutation: SIGN_UP,variables})
      .catch((err) => {
        throw err;
      });
    
      return response.data.user as AddUser_addNewUser;
  
  };
}

export default new UserService();