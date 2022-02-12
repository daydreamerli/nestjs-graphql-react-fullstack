import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersResolver } from './orders.resolvers';
import { OrdersService } from './orders.services';
import { Order } from './entities/order';

@Module({
  imports: [TypeOrmModule.forFeature([Order])],
  providers: [OrdersService, OrdersResolver],
  exports: [OrdersService],
})
export class OrdersModule {}