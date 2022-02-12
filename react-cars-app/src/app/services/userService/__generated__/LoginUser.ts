/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginUser
// ====================================================

export interface LoginUser_login_user {
  __typename: "User";
  id: string;
  username: string;
  email: string;
  country: string;
  thumbnailUrl: string;
}

export interface LoginUser_login {
  __typename: "LoginResponse";
  access_token: string;
  user: LoginUser_login_user;
}

export interface LoginUser {
  login: LoginUser_login;
}

export interface LoginUserVariables {
  email: string;
  password: string;
}
