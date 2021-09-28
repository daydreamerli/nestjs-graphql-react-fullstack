import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [CarsModule,UsersModule,OrdersModule, AuthModule],
})
export class ComponentsModule {}