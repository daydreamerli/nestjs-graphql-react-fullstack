import { Field, ObjectType } from '@nestjs/graphql';
import { Order } from 'src/components/orders/entities/order';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cars' })
@ObjectType()
export class Car {
  
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  category: string;

  @Column()
  @Field()
  year: string;

  @Column()
  @Field()
  quantity: number;

  @Column()
  @Field()
  dailyPrice: number;

  @Column()
  @Field()
  monthlyPrice: number;

  @Column()
  @Field()
  mileage: string;

  @Column()
  @Field()
  gas: string;

  @Column()
  @Field()
  gearType: string;

  @Column()
  @Field()
  driveTrain: string;

  @Column()
  @Field()
  thumbnailUrl: string;

  @ManyToMany(() => Order, orders => orders.cars)
  @JoinTable()
  orders: Order[];
}
