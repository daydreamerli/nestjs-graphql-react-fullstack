import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, RelationId, JoinColumn, BaseEntity, OneToMany } from 'typeorm';
import { IsDate } from 'class-validator';

@Entity({ name: 'orders' })
@ObjectType()

export class Order {

  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;
  
  @Column()
  @Field()
  amount: number;

  @Column({nullable:true})
  @Field()
  pickup: string
  
  @Column({nullable:true})
  @Field()
  dropoff: string

  @Column()
  @Field()
  @IsDate()
  startDate: Date

  @Column()
  @Field()
  @IsDate()
  endDate:Date
  
  @Column()
  @Field()
  duration: number;

}
