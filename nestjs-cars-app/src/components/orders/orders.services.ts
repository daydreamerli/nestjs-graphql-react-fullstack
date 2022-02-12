import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository,InjectEntityManager, TypeOrmModule } from '@nestjs/typeorm';
import { Connection, Repository ,getConnection,getConnectionManager,getRepository} from 'typeorm';
import { NewOrderInput } from './dto/new-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
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

  public async addOrder(NewOrderData: NewOrderInput, carsId: string): Promise<Order> {
    
    const userId = NewOrderData.ownerId;
    // covert the simple string to carId array
    const carsIdArray = carsId.split(",")
    const newOrder = this.orderRepository.create(NewOrderData);
    await this.orderRepository.save(newOrder);
    // achieve manytoone and manytomany relation connection
    await getConnection()
      .createQueryBuilder()
      .relation(Order, "cars")
      .of(newOrder)
      .add(carsIdArray);
  
    await getConnection()
      .createQueryBuilder()
      .relation(Order, "owner")
      .of(newOrder)
      .set(userId);
  
    return newOrder;
  }


}