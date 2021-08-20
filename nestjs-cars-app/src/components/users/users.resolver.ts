import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Console } from 'console';
import { UsersService } from './users.services';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user';


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
  public async findByUsername(@Args('username') username: string): Promise<User> {
    return await this.userService.findByUsername(username).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => User)
  public async findUserByEmail(@Args('email') email: string): Promise<User> {
    return await this.userService.findUserByEmail(email).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Boolean)
  public async deleteUser(@Args('email') email: string) {
    return await this.userService.deleteUser(email).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => User)
  public async addNewUser(
    @Args('newUserData') newUserData: NewUserInput,
  ): Promise<User> {
    return await this.userService.addUser(newUserData).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => User)
  public async updateUserInfo(@Args('email') email: string,
    @Args('updateData') updateData: UpdateUserInput,
  ): Promise<User> {
    return await this.userService.updateUserInfo(email, updateData).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Boolean)
  public async deleteByEmail(@Args('email') email: string,) {
    return await this.userService.deleteUser(email).catch((err) => {
      throw err;
    });
  }

    @Mutation((returns) => Boolean)
    public async deleteAllUsers() {
      return await this.userService.deleteAllUsers().catch((err) => {
        throw err;
      });
    }

}
