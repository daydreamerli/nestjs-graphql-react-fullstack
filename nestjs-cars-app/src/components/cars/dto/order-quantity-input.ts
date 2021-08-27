import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class OrderQuantityInput {
  
  @Field()
  amount: number;

  @Field()
  ownerId: string
 
  @Field()
  startDate: string


  @Field()
  endDate:string
  

  @Field()
  duration: number;

}
