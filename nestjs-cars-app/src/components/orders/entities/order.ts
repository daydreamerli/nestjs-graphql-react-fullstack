import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, RelationId, JoinColumn, BaseEntity, OneToMany, ManyToMany, CreateDateColumn } from 'typeorm';
import { IsDate } from 'class-validator';
import { Car } from 'src/components/cars/entities/car';
import { User } from 'src/components/users/entities/user';

@Entity({ name: 'orders' })
@ObjectType()

export class Order {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  
  @Column()
  @Field()
  amount: number;

  @CreateDateColumn()
  createTime:Date

  @Column()
  @Field()
  startDate: string

  @Column()
  @Field()
  endDate:string
  
  @Column()
  @Field()
  duration: number;
  
  //foreignkey id for specific query
  @Column()
  ownerId: string
  
  @ManyToOne(() => User, user => user.orders, { onDelete: 'CASCADE' })
  owner: User;

  @ManyToMany(() => Car, cars => cars.orders)
  cars:Car[]
  
  // to-do: need to save the new order while saving the related carId to middleware table
  @Column()
  @Field()
  orderCars: number;

}
