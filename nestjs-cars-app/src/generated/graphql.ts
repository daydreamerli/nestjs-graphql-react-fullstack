import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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

export type LoginResponse = {
  __typename?: 'LoginResponse';
  access_token: Scalars['String'];
  user: User;
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
  login: LoginResponse;
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Car: ResolverTypeWrapper<Car>;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginResponse: ResolverTypeWrapper<LoginResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  NewCarInput: NewCarInput;
  NewOrderInput: NewOrderInput;
  NewUserInput: NewUserInput;
  Order: ResolverTypeWrapper<Order>;
  OrderQuantityInput: OrderQuantityInput;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateCarInput: UpdateCarInput;
  UpdateUserInput: UpdateUserInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Car: Car;
  Float: Scalars['Float'];
  Int: Scalars['Int'];
  LoginResponse: LoginResponse;
  Mutation: {};
  NewCarInput: NewCarInput;
  NewOrderInput: NewOrderInput;
  NewUserInput: NewUserInput;
  Order: Order;
  OrderQuantityInput: OrderQuantityInput;
  Query: {};
  String: Scalars['String'];
  UpdateCarInput: UpdateCarInput;
  UpdateUserInput: UpdateUserInput;
  User: User;
};

export type CarResolvers<ContextType = any, ParentType extends ResolversParentTypes['Car'] = ResolversParentTypes['Car']> = {
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  dailyPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  driveTrain?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gas?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gearType?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mileage?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  monthlyPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  thumbnailUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginResponse'] = ResolversParentTypes['LoginResponse']> = {
  access_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  UpdateUserPass?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserPassArgs, 'currPass' | 'newPass'>>;
  addNewCar?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<MutationAddNewCarArgs, 'newCarData'>>;
  addNewOrder?: Resolver<ResolversTypes['Order'], ParentType, ContextType, RequireFields<MutationAddNewOrderArgs, 'carsId' | 'newOrderData'>>;
  addNewUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationAddNewUserArgs, 'newUserData'>>;
  deleteAllOrders?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deleteAllUsers?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  deleteOne?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType, RequireFields<MutationDeleteOneArgs, 'id'>>;
  deleteUser?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  login?: Resolver<ResolversTypes['LoginResponse'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'email' | 'password'>>;
  updateCar?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<MutationUpdateCarArgs, 'name' | 'updateData'>>;
  updateQuantity?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<MutationUpdateQuantityArgs, 'name' | 'orderQuantity'>>;
  updateUserInfo?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationUpdateUserInfoArgs, 'updateData'>>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  duration?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  endDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  orderedCars?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  CheckAvailable?: Resolver<ResolversTypes['String'], ParentType, ContextType, RequireFields<QueryCheckAvailableArgs, 'name'>>;
  CurrentUser?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  cars?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType>;
  findByCategory?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<QueryFindByCategoryArgs, 'category'>>;
  findByDrivetrain?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<QueryFindByDrivetrainArgs, 'driveTrain'>>;
  findByName?: Resolver<ResolversTypes['Car'], ParentType, ContextType, RequireFields<QueryFindByNameArgs, 'name'>>;
  findOrderCars?: Resolver<Array<ResolversTypes['Car']>, ParentType, ContextType, RequireFields<QueryFindOrderCarsArgs, 'ordersId'>>;
  finduserByEmail?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryFinduserByEmailArgs, 'email'>>;
  finduserById?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryFinduserByIdArgs, 'id'>>;
  getAllOrders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType>;
  getAllUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  getCarOrders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetCarOrdersArgs, 'carsId'>>;
  getUserOrders?: Resolver<Array<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetUserOrdersArgs, 'ownerId'>>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  thumbnailUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Car?: CarResolvers<ContextType>;
  LoginResponse?: LoginResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

