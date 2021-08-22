import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { OrdersService } from './orders.services';
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


}