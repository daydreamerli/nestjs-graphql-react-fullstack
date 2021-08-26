import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { NewOrderInput } from './dto/new-order.input';
import { Order } from './entities/order';
import { User } from '../users/entities/user';


@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    ) {}

  public async getAllOrders(): Promise<Order[]> {
    
    return await this.orderRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async getUserOrders(ownerId:string): Promise<Order[]> {
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

    let userid = NewOrderData.ownerId;
    async Connection => {
      const userRepository = Connection.getRepository(User)
      const orderUser = await userRepository.findOne(userid)
      console.log(`The order is placed by user :${orderUser.username}`)
      newOrder.owner = orderUser
    }
    
    await this.orderRepository.save(newOrder).catch((err) => {
      new InternalServerErrorException();
    });
    return newOrder;
  }


}