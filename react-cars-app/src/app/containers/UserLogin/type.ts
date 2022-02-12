import { LoginUser_login,LoginUser_login_user } from "../../services/userService/__generated__/LoginUser";
import { User } from '../../../generated/graphql';



export interface ILoginPageState{
  accessToken: LoginUser_login["access_token"],
  user:any
}