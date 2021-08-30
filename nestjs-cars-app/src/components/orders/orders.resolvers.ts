import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Console } from 'console';
import { OrdersService } from './orders.services';
import { NewOrderInput } from './dto/new-order.input';
import { Order } from './entities/order';


@Resolver()
export class OrdersResolver {
  constructor(private orderService: OrdersService) { }
  
  @Query((returns) => [Order])
  public async getAllOrders(): Promise<Order[]> {
    return await this.orderService.getAllOrders().catch((err) => {
      throw err;
    });
  }

  @Query((returns) => [Order])
  public async getCarOrders(@Args('carsId') carsId:string): Promise<Order[]> {
    return await this.orderService.getCarOrders(carsId).catch((err) => {
      throw err;
    });
  }
  // to-do : add authentication / authorization  userlogin with JWT
  @Query((returns) => [Order])
  public async getUserOrders(@Args('ownerId') ownerId:string): Promise<Order[]> {
    return await this.orderService.getUserOrders(ownerId).catch((err) => {
      throw err;
    });
  }
  // to-do : add authentication / authorization  userlogin with JWT
  @Mutation((returns) => Order)
  public async addNewOrder(
    @Args('newOrderData') newOrderData: NewOrderInput,
  ): Promise<Order> {
    return await this.orderService.addOrder(newOrderData).catch((err) => {
      throw err;
    });
  }
  // to-do : add authentication / authorization  admin&userlogin with JWT
  @Mutation(() => Boolean)
  public async deleteAllOrders(){
     await this.orderService.deleteAllOrders().catch((err) => {
      throw err;
    });
  }

}