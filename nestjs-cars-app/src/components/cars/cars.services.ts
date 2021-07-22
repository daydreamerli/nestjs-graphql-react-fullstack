import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { Repository } from 'typeorm';
import { NewCarInput } from './dto/new-car.input';
import { UpdateCarInput } from './dto/update-car.input';
import { Car } from './entities/car';
import { OrderQuantityInput } from './dto/order-quantity-input';
import { Int } from '@nestjs/graphql';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}

  public async getAllCars(): Promise<Car[]> {
    
    return await this.carRepository.find({}).catch((err) => {
      throw new InternalServerErrorException();
    });
  }
  // findByPriceRange   create a input enum 0-60 60 -100 100 -200
  // public async findByPrice(price:number) :Promise<Car[]>{
    
  //   while (price < enum.1) {
    
  //     return await this.carRepository.find({ dailyPrice <= 100});
  //   }else {
      
  //   }
  // }

  public async findByCategory(category:string) :Promise<Car[]>{
    
    
    return await this.carRepository.find({category:category });
    
  }

  public async findByDrivetrain(driveTrain:string) :Promise<Car[]>{
    
    return await this.carRepository.find({driveTrain:driveTrain });
    
  }

  public async findByID(id:string){
    
    return await this.carRepository.findOne({ id });
    
  }

  public async checkAvaliable(name:string): Promise<string>{
    
    const thisModelCar = await this.carRepository.findOne({ name });
    let avaliableNumber = thisModelCar.quantity;
    
    if (avaliableNumber < 1) {
      // raise alert or send custom err message for this one
      alert("Sorry! No availble cars for this model")
      return "No availibale cars for this model";
    }else{
      return "There are "+avaliableNumber+` ${name}`+" avaliable now";
    }
    
  }
  
  public async addCar(newCarData: NewCarInput): Promise<Car> {

    const newCar = this.carRepository.create(newCarData);

    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });

    return newCar;
  }
  

  public async updateCarInfo(id: string, updateCarData: UpdateCarInput): Promise<Car> {
    
    await this.carRepository.update(id,
      {
        dailyPrice: updateCarData.dailyPrice,
        monthlyPrice: updateCarData.monthlyPrice,
        mileage:updateCarData.mileage
      });
    
    const updatedCar = await this.carRepository.findOne({ id });

    return updatedCar;
  }

  public async deleteCar(id:string):Promise<Boolean>{
    
    await this.carRepository.delete({ id });
    
    return true;
    
  }

  public async updateCarQuantity(name: string, orderQuantity: OrderQuantityInput): Promise<Car> {
   

    let choosenCar = await this.carRepository.findOne({ name });
    console.log(choosenCar.quantity);

    await this.carRepository.update(choosenCar, {
      quantity: choosenCar.quantity-orderQuantity.orderNumber
    })
    
    const updatedQuantityCar = await this.carRepository.findOne({ name });
    
    return updatedQuantityCar;
  }


}