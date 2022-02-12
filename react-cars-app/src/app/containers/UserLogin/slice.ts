import { createSlice } from "@reduxjs/toolkit";
import { ILoginPageState } from './type';


const initialState: ILoginPageState = {
  accessToken: "",
  user:null,
}

const loginPageSlice = createSlice({
  name: "loginPage",
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.user = action.payload.user;
    },
    logout: (state, action) => {
      state.accessToken = "";
      state.user = null;
    }
  }
})

export const { login, logout } = loginPageSlice.actions;

export default loginPageSlice.reducer;