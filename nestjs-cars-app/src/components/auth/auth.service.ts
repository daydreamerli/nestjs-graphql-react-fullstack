import { forwardRef, Inject, Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt'
import { User } from '../users/entities/user';
import { UsersService } from '../users/users.services';
import { jwtSecret } from './constants';
import * as bcrypt from 'bcrypt';
import { Field, ObjectType } from '@nestjs/graphql';
import { NewUserInput } from '../../components/users/dto/new-user.input';

@ObjectType()
export class LoginResponse{
  @Field()
  access_token: string;
  // @Field( ()=>User)
  // user: User;
}
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,) {}
    
  async validate(email: string, password: string): Promise<User | null> {
    
    const user = await this.userService.findByUserEmail(email)
    console.log(`User with email : ${email} is trying to login`)
    if (!user) {
      return null;
    }
    const passwordIsValid = await bcrypt.compare(password, user.password);
    console.log('The user input password is valid :', passwordIsValid)
    if (!passwordIsValid) {
      return null;
    } else {
       
      return user;
    }
  }

  async login(user: User): Promise<LoginResponse> {
  
    const payload = { id: user.id, email:user.email }
    return{ access_token:this.jwtService.sign(payload)}
  }

  async signup(NewUserDate:NewUserInput): Promise<User> {
  
    return await this.userService.createUser(NewUserDate);
  }

  async verify(token: string): Promise<User | any> {

    const decoded = this.jwtService.verify(token, { secret: jwtSecret });
    const user = await this.userService.findByUserEmail(decoded.email)

    if (!user) {
      throw new Error('Unable to get the user from the token service!')
    }

    return user;
  }  
}
