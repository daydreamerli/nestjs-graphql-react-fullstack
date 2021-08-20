import { Field, InputType, Int } from '@nestjs/graphql';
import { IsEmail, IS_NUMBER_STRING, Length, Max, min, Min, minLength } from 'class-validator';
import { validate } from 'graphql';

@InputType()
export class NewUserInput {

  
  @Field()
  username: string;

  
  @Field()
  @IsEmail()
  email: string;
 
  
  @Field()
  @Length(6,512)
  password: string;
  
  
  @Field()
  country: string;

  @Field({nullable:true})
  thumbnailUrl: string;

}


