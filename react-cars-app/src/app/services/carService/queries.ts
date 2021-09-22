import gql from "graphql-tag";

export const GET_ALL_CARS = gql`
  query GetCars {
    cars {
      id
      name
      category
      quantity
      year
      mileage
      gearType
      driveTrain
      gas
      thumbnailUrl
      dailyPrice
      monthlyPrice
    }
  }
`;
