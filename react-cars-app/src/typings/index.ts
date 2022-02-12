
import { IHomePageState } from "../app/containers/HomePage/type";
import { ILoginPageState } from "../app/containers/UserLogin/type";


export interface IRootAppState {
  homePage: IHomePageState;
  loginPage:ILoginPageState;
}
