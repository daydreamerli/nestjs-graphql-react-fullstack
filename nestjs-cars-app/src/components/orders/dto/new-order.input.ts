import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';
import { User } from '../../users/entities/user';
import { Car } from '../../cars/entities/car';
import { JoinColumn, RelationId } from 'typeorm';
import { CarsModule } from '../../cars/cars.module';
import { userInfo } from 'os';


@InputType()
export class NewOrderInput {

  @Field()
  ownerId: string

  @Field(type=>Int)
  @Min(20)  
  amount: number;
  
  @Field()
  startDate: string;

  @Field()
  endDate: string;
  
  
  @Field(type=>Int)
  @Min(1)
  @Max(120)
  duration: number;
  
  //to-do:change this input field to make the relation saves when create new order-data
  @Field()
  orderedCars: string;
 

  

}