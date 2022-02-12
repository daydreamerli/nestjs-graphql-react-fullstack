import gql from "graphql-tag";

export const ME_QUERY = gql`
  query UserNow{
    CurrentUser{
    id
    username
    email
    country
    thumbnailUrl
  }
  }
`;
