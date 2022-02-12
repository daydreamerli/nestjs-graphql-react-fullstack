/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { NewUserInput } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: AddUser
// ====================================================

export interface AddUser_addNewUser {
  __typename: "User";
  username: string;
  email: string;
  password: string;
  country: string;
}

export interface AddUser {
  addNewUser: AddUser_addNewUser;
}

export interface AddUserVariables {
  SignupData: NewUserInput;
}
