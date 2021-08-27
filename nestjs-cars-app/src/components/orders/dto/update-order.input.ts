import { Field, InputType, Int  } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class UpdateOrderInput {


  @Field()
  startDate: string;

  @Field()
  endDate: string;
  
  
  @Field(type=>Int)
  @Min(1)
  @Max(120)
  duration: number;
  
  @Field(type=>Int)
  @Min(20)  
  amount: number;
  
  @Field()
  orderedCars: String;

 

}