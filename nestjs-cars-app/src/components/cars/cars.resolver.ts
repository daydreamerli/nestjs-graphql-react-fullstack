import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }

  public async findOne(id:string){
    
    return await this.carRepository.findOne({id});
    
  }

  public async deleteCar(id:string){
    
    await this.carRepository.delete({ id });
    
    return true;
    
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });

    return newCar;
  }
  

  public async updateCar(id:string,updateCarData: UpdateCarInput): Promise<Car> {
    const choosenCar =await this.carRepository.findOne({id});
    Object.assign(choosenCar, UpdateCarInput);
    await this.carRepository.save(choosenCar).catch((err) => {
      new InternalServerErrorException();
    });

    return choosenCar;
  }

}