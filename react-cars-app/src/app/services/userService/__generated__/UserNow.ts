/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UserNow
// ====================================================

export interface UserNow_CurrentUser {
  __typename: "User";
  id: string;
  username: string;
  email: string;
  country: string;
  thumbnailUrl: string;
}

export interface UserNow {
  CurrentUser: UserNow_CurrentUser;
}
