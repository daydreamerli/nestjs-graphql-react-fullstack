import { Args, Mutation, Query, Resolver, Context } from '@nestjs/graphql';
import { UsersService } from './users.services';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user';
import { CurrentUser } from './user.decorator';
import { SimpleConsoleLogger } from 'typeorm';
import { HttpException, HttpStatus, NotFoundException, UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { access_token } from '../auth/auth.service';


@Resolver()
export class UsersResolver {
  constructor(private userService: UsersService) { }
  
  @Query((returns) => [User])
  public async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers().catch((err) => {
      throw err;
    });
  }

  @Query((returns) => User)
  @UseGuards(GqlAuthGuard)
  public async finduserById(@Args('id') id: string): Promise<User> {
    return await this.userService.getUserById(id).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => User)
  @UseGuards(GqlAuthGuard)  
  public async finduserByEmail(@Args('email') email: string): Promise<User> {
    return await this.userService.findByUserEmail(email).catch((err) => {
      throw err;
    });
  }
  // use mutation create jwt for user login request
  @Mutation((returns) => access_token)
  public  async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    try {
      return await this.userService.login(email,password);
    } catch (err) {
      console.error(err);
    }
  }
  
  @Query(() => User)
  @UseGuards(GqlAuthGuard)
  public async CurrentUser(@CurrentUser() user: User) {
    try {
      return await this.userService.getUserById(user.id);
    } catch (err) {
      console.error(err);
    }
  }

  @Mutation((returns) => User)
  public async addNewUser(
    @Args('newUserData') newUserData: NewUserInput,
  ): Promise<User> {
    return await this.userService.createUser(newUserData).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => User)
  @UseGuards(GqlAuthGuard)
  async UpdateUserPass(
    @CurrentUser() user: User,
    @Args('currPass') currPass: string,
    @Args('newPass') newPass: string,
  ) {
    try {
      return await this.userService.updatePassword(user.id,currPass,newPass);
    } catch (err) {
      console.error(err);
    }
  }
  @Mutation((returns) => User)
  @UseGuards(GqlAuthGuard)
  public async updateUserInfo(@CurrentUser() user: User,
    @Args('updateData') updateData: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.updateUserInfo(user.id, updateData).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Boolean)
  @UseGuards(GqlAuthGuard)  
  public async deleteUser(@CurrentUser() user: User) {
    return await this.userService.deleteUser(user.id).catch((err) => {
      throw err;
    });
  }
  
  //will delete this function at production code
  @Mutation((returns) => Boolean)
  public async deleteAllUsers() {
    return await this.userService.deleteAllUsers().catch((err) => {
      throw err;
    });
  }

}