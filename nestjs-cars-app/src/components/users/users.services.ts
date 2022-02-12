import { forwardRef, Inject, Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { Repository } from 'typeorm';
import { NewUserInput } from './dto/new-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user';
import * as bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';
import { JwtService } from '@nestjs/jwt';
import { AuthService, LoginResponse } from '../auth/auth.service';


@Injectable()
export class UsersService {

  constructor(@Inject(forwardRef(() => AuthService))
      private authService: AuthService,
    @InjectRepository(User) private userRepository: Repository<User>) { }
  

  public async getAllUsers(): Promise<User[]> {
    
    return await this.userRepository.find().catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async getUserById(id: string): Promise<User> {

    return await this.userRepository.findOneOrFail(id,{relations:['orders']}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async findByUserEmail(email:string) :Promise<User>{
    
    return await this.userRepository.findOne({ email}).catch((err) => {
      throw alert(`User with ${email} doesn't exists!Please check the email again!`);
    });
  }

  public async login(email: string, password: string): Promise< LoginResponse> {
    
    const IsvalidUser = await this.authService.validate(email, password);

    if (!IsvalidUser) {
      return null;
    } else {
      return await this.authService.login(IsvalidUser);
    }
    // try {
    //   const user = await this.userRepository.findOne({ email });
    //   return user && (await bcrypt.compare(password, user.password))
    //     ? await this.jwtService.signAsync({ email, id: user.id })
    //     : new GraphQLError('Sorry, wrong password/email');
    // } catch (err) {
    //   console.error(err);
    // }
  }

  public async createUser(newUserData: NewUserInput): Promise<User> {
    
    newUserData.password = await bcrypt
      .hash(newUserData.password, 10)
      .then((r)=>r)

    const newUser = this.userRepository.create(newUserData);

    await this.userRepository.save(newUser).catch((err) => {
      new InternalServerErrorException();
    });

    return newUser;
  }
 
  public async updatePassword(id: string, password:string, newPass:string) {
    try {
      const user = await this.userRepository.findOne(id);
      if (await bcrypt.compare(password, user.password)) {
        user.password = await bcrypt.hash(newPass, 10);
        return await this.userRepository.save(user);
      }
    } catch (err) {
      console.error(err);
    }
  }

  public async updateUserInfo(id: string, updateUserData: UpdateUserInput): Promise<User> {

    const user = await this.userRepository.findOne({ id });
    
    await this.userRepository.update(id,
      {
        username: updateUserData.username,
        country: updateUserData.country,
        thumbnailUrl: updateUserData.thumbnailUrl,
      });
    
    return user;
  }

  public async deleteUser(id: string){
    
    await this.userRepository.delete({ id }).catch((err) => {
      throw new InternalServerErrorException()
    });
  
      return true;
  }

  public async deleteAllUsers(){
    
    await this.userRepository.delete({}).catch((err) => {
      throw new InternalServerErrorException();
    });
    
    return true;
    
  }


}