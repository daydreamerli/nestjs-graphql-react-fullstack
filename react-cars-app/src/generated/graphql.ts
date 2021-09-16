export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  category: Scalars['String'];
  dailyPrice: Scalars['Float'];
  driveTrain: Scalars['String'];
  gas: Scalars['String'];
  gearType: Scalars['String'];
  id: Scalars['String'];
  mileage: Scalars['String'];
  monthlyPrice: Scalars['Float'];
  name: Scalars['String'];
  quantity: Scalars['Float'];
  thumbnailUrl: Scalars['String'];
  year: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  UpdateUserPass: User;
  addNewCar: Car;
  addNewOrder: Order;
  addNewUser: User;
  deleteAllOrders: Scalars['Boolean'];
  deleteAllUsers: Scalars['Boolean'];
  deleteOne: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: Scalars['String'];
  updateCar: Car;
  updateQuantity: Car;
  updateUserInfo: User;
};


export type MutationUpdateUserPassArgs = {
  currPass: Scalars['String'];
  newPass: Scalars['String'];
};


export type MutationAddNewCarArgs = {
  newCarData: NewCarInput;
};


export type MutationAddNewOrderArgs = {
  carsId: Scalars['String'];
  newOrderData: NewOrderInput;
};


export type MutationAddNewUserArgs = {
  newUserData: NewUserInput;
};


export type MutationDeleteOneArgs = {
  id: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateCarArgs = {
  name: Scalars['String'];
  updateData: UpdateCarInput;
};


export type MutationUpdateQuantityArgs = {
  name: Scalars['String'];
  orderQuantity: OrderQuantityInput;
};


export type MutationUpdateUserInfoArgs = {
  updateData: UpdateUserInput;
};

export type NewCarInput = {
  category: Scalars['String'];
  dailyPrice: Scalars['Int'];
  driveTrain: Scalars['String'];
  gas: Scalars['String'];
  gearType: Scalars['String'];
  mileage: Scalars['String'];
  monthlyPrice: Scalars['Int'];
  name: Scalars['String'];
  quantity: Scalars['Int'];
  thumbnailUrl: Scalars['String'];
  year: Scalars['String'];
};

export type NewOrderInput = {
  amount: Scalars['Int'];
  duration: Scalars['Int'];
  endDate: Scalars['String'];
  orderedCars: Scalars['String'];
  ownerId: Scalars['String'];
  startDate: Scalars['String'];
};

export type NewUserInput = {
  country?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  thumbnailUrl?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  amount: Scalars['Float'];
  duration: Scalars['Float'];
  endDate: Scalars['String'];
  id: Scalars['String'];
  orderedCars: Scalars['String'];
  startDate: Scalars['String'];
};

export type OrderQuantityInput = {
  orderNumber: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  CheckAvailable: Scalars['String'];
  CurrentUser: User;
  cars: Array<Car>;
  findByCategory: Array<Car>;
  findByDrivetrain: Array<Car>;
  findByName: Car;
  findOrderCars: Array<Car>;
  finduserByEmail: User;
  finduserById: User;
  getAllOrders: Array<Order>;
  getAllUsers: Array<User>;
  getCarOrders: Array<Order>;
  getUserOrders: Array<Order>;
};


export type QueryCheckAvailableArgs = {
  name: Scalars['String'];
};


export type QueryFindByCategoryArgs = {
  category: Scalars['String'];
};


export type QueryFindByDrivetrainArgs = {
  driveTrain: Scalars['String'];
};


export type QueryFindByNameArgs = {
  name: Scalars['String'];
};


export type QueryFindOrderCarsArgs = {
  ordersId: Scalars['String'];
};


export type QueryFinduserByEmailArgs = {
  email: Scalars['String'];
};


export type QueryFinduserByIdArgs = {
  id: Scalars['String'];
};


export type QueryGetCarOrdersArgs = {
  carsId: Scalars['String'];
};


export type QueryGetUserOrdersArgs = {
  ownerId: Scalars['String'];
};

export type UpdateCarInput = {
  dailyPrice: Scalars['Int'];
  mileage?: Maybe<Scalars['String']>;
  monthlyPrice: Scalars['Int'];
  thumbnailUrl?: Maybe<Scalars['String']>;
};

export type UpdateUserInput = {
  country?: Maybe<Scalars['String']>;
  thumbnailUrl?: Maybe<Scalars['String']>;
  username: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  country: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['String'];
  password: Scalars['String'];
  thumbnailUrl: Scalars['String'];
  username: Scalars['String'];
};
