import gql from "graphql-tag";

export const GET_ALL_CARS = gql`
  query GetCars {
    getAllCars {
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
