import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class OrderQuantityInput {

  @Field((type) => Int)
  @Max(10, { message: "what you need more than 10 cars for?" })
  @Min(1)
  orderNumber: number;

}
