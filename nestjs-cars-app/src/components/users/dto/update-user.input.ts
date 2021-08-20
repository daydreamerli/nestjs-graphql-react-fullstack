import { Field, InputType, Int } from '@nestjs/graphql';
import { Length, Max, Min } from 'class-validator';

@InputType()
export class UpdateUserInput {

  
  @Field()
  username: string;


  @Field((type) => String)
  @Length(6,512)
  password: string;
  
  @Field({nullable:true})
  thumbnailUrl: string;
  

}