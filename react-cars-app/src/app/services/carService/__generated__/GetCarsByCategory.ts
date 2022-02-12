/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCarsByCategory
// ====================================================

export interface GetCarsByCategory_findByCategory {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  gas: string;
  thumbnailUrl: string;
  dailyPrice: number;
  monthlyPrice: number;
}

export interface GetCarsByCategory {
  findByCategory: GetCarsByCategory_findByCategory[];
}

export interface GetCarsByCategoryVariables {
  category: string;
}
