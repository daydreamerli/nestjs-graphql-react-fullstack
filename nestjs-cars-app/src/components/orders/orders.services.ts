import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, getConnection } from 'typeorm';
import { NewOrderInput } from './dto/new-order.input';
import { Order } from './entities/order';
import { User } from '../users/entities/user';
import { Car } from '../cars/entities/car';


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>) {}

  public async getAllOrders(): Promise<Order[]> {
    
    return await this.orderRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async getCarOrders(id: string): Promise<Order[]>{
    return await getConnection()
    .createQueryBuilder()
    .relation(Car, "orders")
    .of(id)
    .loadMany().catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async getUserOrders(ownerId: string): Promise<Order[]> {

    // need add where sql to identify which owner is this order belong to
    return await this.orderRepository.find({relations:['owner'],where:{owner:{id:ownerId}}}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }  

  public async deleteAllOrders(): Promise<Boolean> {
    
     await this.orderRepository.delete({}).catch((err) => {
       throw new InternalServerErrorException();
     });
     return true;
  }

  public async addOrder(NewOrderData: NewOrderInput): Promise<Order> {

    const newOrder = this.orderRepository.create(NewOrderData);
    // to-do: achieve manytoone and manytomany relation connection
    // await getConnection()
    // .createQueryBuilder()
    //   .relation(Order, "cars")
    //   .of(newOrder)
    //   .add({ carId1,carId2 ...})

    let userId = NewOrderData.ownerId;
    await getConnection()
    .createQueryBuilder()
      .relation(Order, "owner")
      .of(newOrder)
      .set({userId})
    
    await this.orderRepository.save(newOrder).catch((err) => {
      new InternalServerErrorException();
    });
    return newOrder;
  }

}