import { Field, InputType, Int } from '@nestjs/graphql';
import { Length, Max, Min } from 'class-validator';

@InputType()
export class UpdateUserInput {
  
  @Field()
  username: string;
 
  @Field({nullable:true})
  country: string;
  
  @Field({nullable:true})
  thumbnailUrl: string;
  
}