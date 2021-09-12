import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Console } from 'console';
import { CarsService } from './cars.services';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { UpdateCarInput } from './dto/update-car.input';
import { OrderQuantityInput } from './dto/order-quantity-input';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }
  
  @Query((returns) => [Car])
  public async findOrderCars(@Args('ordersId') id: string): Promise<Car[]> {
    return await this.carsService.findOrderCars(id).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => [Car])
  public async findByCategory(@Args('category') category: string): Promise<Car[]> {
    return await this.carsService.findByCategory(category).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => [Car])
  public async findByDrivetrain(@Args('driveTrain') driveTrain: string): Promise<Car[]> {
    return await this.carsService.findByDrivetrain(driveTrain).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => Car)
  public async findByName(@Args('name') name: string): Promise<Car> {
    return await this.carsService.findByName(name).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => String)
  public async CheckAvailable(@Args('name') name: string) {
    return await this.carsService.checkAvailable(name).catch((err) => {
      throw err;
    });
  }

  @Mutation(() => Boolean)
  public async deleteOne(@Args('id') id: string) {
    return await this.carsService.deleteCar(id).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return await this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async updateCar(@Args('name') name: string,
    @Args('updateData') updateData: UpdateCarInput,
  ): Promise<Car> {
    return await this.carsService.updateCarInfo(name,updateData).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async updateQuantity(@Args('name') name: string,
  @Args('orderQuantity') orderQuantity: OrderQuantityInput,
  ): Promise<Car> {
    return await this.carsService.updateCarQuantity(name,orderQuantity).catch((err) => {
      throw err;
    });
  }
    
}
