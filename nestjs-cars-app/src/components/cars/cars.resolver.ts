import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Console } from 'console';
import { CarsService } from './cars.services';
import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { UpdateCarInput } from './dto/update-car.input';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return await this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Query((returns) => Car)
  public async findOne(@Args('id') id: string): Promise<Car> {
    return await this.carsService.findOne(id).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => Boolean)
  public async CheckAvailable(@Args('id') id: string) {
    return await this.carsService.checkAvaliable(id).catch((err) => {
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
  public async updateCar(@Args('id') id: string,
    @Args('updateData') updateData: UpdateCarInput,
  ): Promise<Car> {
    return await this.carsService.updateCarInfo(id,updateData).catch((err) => {
      throw err;
    });
  }
    
}
