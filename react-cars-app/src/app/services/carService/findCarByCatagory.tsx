import gql from "graphql-tag";

export const GET_CARS_BYCATAG = gql`
  query GetCarsByCategory($category: String!) {
    findByCategory(category:$category) {
      id
      name
      mileage
      gearType
      gas
      thumbnailUrl
      dailyPrice
      monthlyPrice
    }
  }
`;